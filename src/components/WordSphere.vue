<template>
  <div class="word-sphere" ref="container">
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
    },
  },
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");
    const container = this.$refs.container;

    // Responsive resize
    const resizeCanvas = () => {
      const size = Math.min(container.clientWidth, 300); // Max 300px
      canvas.width = size;
      canvas.height = size;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const radius = () => canvas.width / 3;
    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    const points = this.words.map((word, i) => {
      const phi = Math.acos(-1 + (2 * i) / this.words.length);
      const theta = Math.sqrt(this.words.length * Math.PI) * phi;
      return { word, phi, theta };
    });

    let rotationY = 0;
    let rotationX = 0;

    // Rotation speed variables for easing
    let targetSpeed = 0.002;
    let currentSpeed = targetSpeed;
    let direction = 1; // spin direction

    // Reverse direction every 6 seconds
//    setInterval(() => {
//      direction *= -1;
//    }, 6000);

    // Easing factor controls how fast speed changes (0 < easing <=1)
    const easing = 0.05;

    // Hover to ease speed down to zero, mouseleave to ease back up
    container.addEventListener("mouseenter", () => {
      targetSpeed = 0;
    });
    container.addEventListener("mouseleave", () => {
      targetSpeed = 0.002;
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((p) => {
        const x =
          radius() *
          Math.cos(p.theta + rotationY) *
          Math.sin(p.phi + rotationX);
        const y =
          radius() *
          Math.sin(p.theta + rotationY) *
          Math.sin(p.phi + rotationX);
        const z = radius() * Math.cos(p.phi + rotationX);

        const scale = canvas.width / (canvas.width + z);
        const x2d = centerX() + x * scale;
        const y2d = centerY() + y * scale;

        const alpha = 0.4 + (scale - 0.5);

        ctx.font = `${14 * scale}px Arial`;
        ctx.fillStyle = `rgba(56, 56, 56, ${alpha})`; // change text color
        ctx.textAlign = "center";
        ctx.fillText(p.word, x2d, y2d);
      });

      // Ease currentSpeed toward targetSpeed
      currentSpeed += (targetSpeed - currentSpeed) * easing;

      rotationY += direction * currentSpeed;
      rotationX += direction * currentSpeed / 2; // slower vertical tilt

      requestAnimationFrame(render);
    };

    render();
  },
};
</script>

<style scoped>
.word-sphere {
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  background: #76A8BC;
  border-radius: 100%;
}
</style>
