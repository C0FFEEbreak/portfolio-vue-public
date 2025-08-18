<template>
  <div
    class="word-sphere"
    :aria-hidden="decorative ? 'true' : 'false'"
    ref="container"
  >
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "WordSphere",
  props: {
    words: {
      type: Array,
      required: true,
      default: () => []
    },
    maxSize: {
      type: Number,
      default: 300
    },
    // If true, the component will be aria-hidden (decorative).
    // Set :decorative="false" if the sphere is meaningful and you supply accessible content.
    decorative: {
      type: Boolean,
      default: true
    },
    // base rotation speed
    speed: {
      type: Number,
      default: 0.002
    },
    // text color (CSS color string)
    textColor: {
      type: String,
      default: "rgba(56,56,56,1)"
    }
  },
  mounted() {
    // SSR guard
    if (typeof window === "undefined") return;

    const canvas = this.$refs.canvas;
    const container = this.$refs.container;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // HiDPI scaling helper
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    // Resize handling with ResizeObserver (falls back to window resize)
    const resizeCanvas = () => {
      const size = Math.min(container.clientWidth || this.maxSize, this.maxSize);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // map drawing to CSS pixels
    };

    // Compute geometry helpers that depend on canvas size
    const radius = () => (canvas.width / dpr) / 3;
    const centerX = () => (canvas.width / dpr) / 2;
    const centerY = () => (canvas.width / dpr) / 2;

    // Prepare spherical distribution of words
    const makePoints = (words) => {
      const n = words.length || 1;
      return words.map((word, i) => {
        // Fibonacci sphere distribution for nicer spacing
        const t = i / n;
        const phi = Math.acos(1 - 2 * t);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        return { word, phi, theta };
      });
    };

    let points = makePoints(this.words);

    // reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // render static once and stop
      resizeCanvas();
      renderStatic();
      return;
    }

    // animation state
    let rotationY = 0;
    let rotationX = 0;
    let targetSpeed = this.speed;
    let currentSpeed = targetSpeed;
    let direction = 1;
    const easing = 0.05;

    // hover interactions: ease to zero speed on hover
    const onMouseEnter = () => { targetSpeed = 0; };
    const onMouseLeave = () => { targetSpeed = this.speed; };
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    // Use ResizeObserver when available
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        resizeCanvas();
        // recompute points if needed (size-independent here)
      });
      ro.observe(container);
    } else {
      // fallback
      window.addEventListener("resize", resizeCanvas);
    }

    resizeCanvas();

    // main render loop
    let rafId = null;
    const renderFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((p) => {
        // spherical -> 3D coords
        const x = radius() * Math.cos(p.theta + rotationY) * Math.sin(p.phi + rotationX);
        const y = radius() * Math.sin(p.theta + rotationY) * Math.sin(p.phi + rotationX);
        const z = radius() * Math.cos(p.phi + rotationX);

        const scale = (canvas.width / dpr) / ((canvas.width / dpr) + z);
        const x2d = centerX() + x * scale;
        const y2d = centerY() + y * scale;

        // alpha & font scale
        const alpha = Math.max(0.25, 0.4 + (scale - 0.5));
        const fontSize = Math.max(10, 14 * scale);

        ctx.font = `${fontSize}px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;
        ctx.fillStyle = typeof this.textColor === "function" ? this.textColor(scale, p.word) : this.textColor;
        ctx.globalAlpha = alpha;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.word, x2d, y2d);
        ctx.globalAlpha = 1;
      });

      // easing speed
      currentSpeed += (targetSpeed - currentSpeed) * easing;
      rotationY += direction * currentSpeed;
      rotationX += (direction * currentSpeed) / 2;

      rafId = requestAnimationFrame(renderFrame);
    };

    // static render for reduced motion or initial paint
    function renderStatic() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((p) => {
        const x = radius() * Math.cos(p.theta) * Math.sin(p.phi);
        const y = radius() * Math.sin(p.theta) * Math.sin(p.phi);
        const z = radius() * Math.cos(p.phi);

        const scale = (canvas.width / dpr) / ((canvas.width / dpr) + z);
        const x2d = centerX() + x * scale;
        const y2d = centerY() + y * scale;

        const alpha = Math.max(0.25, 0.4 + (scale - 0.5));
        const fontSize = Math.max(10, 14 * scale);

        ctx.font = `${fontSize}px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;
        ctx.fillStyle = typeof this.textColor === "function" ? this.textColor(scale, p.word) : this.textColor;
        ctx.globalAlpha = alpha;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.word, x2d, y2d);
        ctx.globalAlpha = 1;
      });
    }

    // kick off animation
    rafId = requestAnimationFrame(renderFrame);

    // cleanup on unmount
    this._cleanup = () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (ro && typeof ro.disconnect === "function") ro.disconnect();
      if (!ro) window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  },

  beforeUnmount() {
    if (this._cleanup) this._cleanup();
  }
};
</script>

<style scoped>
.word-sphere {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
canvas { display: block; }
</style>
