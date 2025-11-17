<template>
  <section class="hero" role="banner" aria-label="Intro">
    <!-- Blobs -->
    <div class="bg-blobs" aria-hidden="true">
      <div class="bg-blob blob-black"></div>
      <div class="bg-blob blob-white"></div>
    </div>

    <div class="hero-inner">
      <h1 class="name">{{ name }}</h1>

      <p class="title">
        I'm a <span ref="typed"></span>
      </p>

      <p class="tagline">{{tagline}}</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Typed from "typed.js";

const name = "Hi, I'm Stacey Trent Donica.";
const tagline = "Creating accessible web experiences and interactive eLearning courses.";

const typed = ref(null);
let typedInstance = null;


const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

onMounted(() => {
  if (!typed.value) return;

  if (reducedMotion) {
    // show first role static for reduced-motion users
    typed.value.textContent = "Front-End Developer";
    return;
  }

  typedInstance = new Typed(typed.value, {
    strings: [
      "Front-End Developer",
      "Courseware Developer",
      "Graphic Designer",
      "Media Creator"
    ],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 2500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});

onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }
});
</script>

<style scoped>
.hero {
  text-align: left;
  background-color: #29353C; /* fallback color */
  /*  background-image: url('@/assets/blurry-gradient.png');  */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: relative;      /* background blobs */
  overflow: hidden;        /* blobs container */
  padding: 3.5rem 1.25rem;
  color: #C5C6BF;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 0.8rem;
  position: relative; /* ensure blob layer */
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  color: #5F97AD;
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  white-space: nowrap;
  color: #5F97AD;
  margin: 0 auto;
}

/* Typed cursor style */
.title > span {
  /* border-right: 2px solid #000; mimics cursor */
  padding-right: 2px;
  white-space: nowrap;
  display: inline-block;
}

.tagline {
  font-size: 1rem;
  max-width: 100%;
  color: #C5C6BF;
  margin: 0 auto;
}

/* ========== blob background  ========== */

/* container for blobs */
.bg-blobs {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.bg-blob {
  position: absolute;
  pointer-events: none;
  user-select: none;
  filter: blur(6px);
  mix-blend-mode: normal;
  opacity: 1;
  transition: opacity 240ms ease;
  will-change: border-radius, transform, opacity;
}

/* Black blob */
.blob-black {
  --w: 520px; /*  entire width  */
  width: var(--w);
  height: calc(var(--w) * 0.95);
  right: 4%;
  top: 4%;
  z-index: 1;

  /* black center transparent edge */
  background: radial-gradient(
    circle at 45% 40%,
    rgba(126,25,70,0.98) 0%,
    rgba(126,25,70,0.95) 46%,
    rgba(126,25,70,0.32) 72%,
    rgba(126,25,70,0) 100%
  );

  /* organic shape */
  border-radius: 46% 54% 52% 48% / 48% 50% 50% 52%;
  opacity: 0.18;  /* controls blob right */
  transform-origin: center;
}

/* White blob */
.blob-white {
  --w: 420px; /*  entire width  */
  width: var(--w);
  height: calc(var(--w) * 1.06);
  left: 8%;
  top: 24%;
  z-index: 1;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(247,236,89,0.95) 0%,
    rgba(247,236,89,0.95) 46%,
    rgba(247,236,89,0.95) 70%,
    rgba(247,236,89,0.95) 100%
  );

  border-radius: 52% 48% 46% 54% / 52% 46% 54% 48%;
  opacity: 0.04;  /* blob left */
  transform-origin: center;
}

@keyframes blobFloatA {
  0% { transform: translateY(0) rotate(-1deg); border-radius: 22% 28% 26% 44% / 22% 26% 24% 38%; }
  50% { transform: translateY(-6px) rotate(1deg); border-radius: 48% 52% 50% 50% / 50% 48% 52% 50%; }
  100% { transform: translateY(0) rotate(-1deg); border-radius: 22% 28% 26% 44% / 22% 26% 24% 38%; }
}
@keyframes blobFloatB {
  0% { transform: translateY(0) rotate(2deg); border-radius: 32% 38% 36% 54% / 32% 36% 34% 48%; }
  50% { transform: translateY(4px) rotate(-2deg); border-radius: 54% 46% 48% 52% / 46% 54% 50% 50%; }
  100% { transform: translateY(0) rotate(2deg); border-radius: 32% 38% 36% 54% / 32% 36% 34% 48%; }
}


@media (prefers-reduced-motion: no-preference) {
  .blob-black { animation: blobFloatA 8s ease-in-out infinite; }
  .blob-white { animation: blobFloatB 4s ease-in-out infinite; }
}
@media (prefers-reduced-motion: reduce) {
  .blob-black, .blob-white { animation: none !important; }
}


@media (max-width: 980px) {
  .blob-black { --w: 420px; right: 4%; top: 8%; }
  .blob-white { --w: 360px; left: 6%; top: 18%; }
}
@media (max-width: 720px) {
  .hero { padding: 4rem 1rem; }
  .bg-blob { display: none; } /* hide blobs */
  .name { font-size: 1.75rem; }
  .tagline { font-size: 0.98rem; }
}
@media (max-width: 420px) {
  p.title {
    font-size: 1.3rem;
  }
}
</style>
