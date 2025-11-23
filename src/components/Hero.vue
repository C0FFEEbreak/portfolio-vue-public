<template>
  <section class="hero" role="banner" aria-label="Intro">
    <!-- Geometric Background Elements -->
    <div class="geometric-bg" aria-hidden="true">
      <!-- Large Yellow Circle - Primary -->
      <div class="circle circle-large"></div>
      
      <!-- Medium Yellow Circle -->
      <div class="circle circle-medium"></div>
      
      <!-- Small Yellow Circle -->
      <div class="circle circle-small"></div>
      
      <!-- Half Circle - Left -->
      <div class="half-circle"></div>
      
      <!-- Ring/Outline Circle -->
      <div class="ring-circle"></div>
      
      <!-- Dot Pattern Overlay -->
      <div class="dot-grid"></div>
      
      <!-- Large Initial Letter as Graphic Element -->
      <div class="letter-graphic">S</div>
    </div>

    <div class="hero-inner">
      <div class="content-wrapper">
        <h1 class="name">{{ name }}</h1>

        <p class="title">
          I'm a <span ref="typed"></span>
        </p>

        <p class="tagline">{{ tagline }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Typed from "typed.js";

const name = "Stacey Trent Donica";
const tagline = "Creating years of modern web experiences and interactive eLearning courses.";

const typed = ref(null);
let typedInstance = null;

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

onMounted(() => {
  if (!typed.value) return;

  if (reducedMotion) {
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
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 380px;
  display: flex;
  align-items: center;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  width: 100%;
}

.content-wrapper {
  text-align: left;
  max-width: 480px;
}

.name {
  font-size: 3rem;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.title {
  font-size: 1.75rem;
  color: #ffd77a;
  margin: 0 0 1rem 0;
  font-weight: 600;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.title > span {
  padding-right: 2px;
  white-space: nowrap;
  display: inline-block;
}

.tagline {
  font-size: 1.1rem;
  color: #E5E7EB;
  line-height: 1.6;
  margin: 0;
  max-width: 500px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

/* ========== GEOMETRIC BACKGROUND ========== */

.geometric-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Large Yellow Circle - Main focal point */
.circle-large {
  position: absolute;
  width: 480px;
  height: 480px;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  background: #374C53;
  border-radius: 50%;
  opacity: 0.95;
  z-index: 2;
}

/* Medium Circle */
.circle-medium {
  position: absolute;
  width: 160px;
  height: 160px;
  right: 3%;
  top: 8%;
  background: #ffcc5c;
  border-radius: 50%;
  opacity: 0.9;
  z-index: 3;
}

/* Small Circle */
.circle-small {
  position: absolute;
  width: 75px;
  height: 75px;
  right: 60%;
  top: 12%;
  background: #ffd77a;
  border-radius: 50%;
  opacity: 0.85;
  z-index: 3;
}

/* Half Circle - Left Side */
.half-circle {
  position: absolute;
  width: 180px;
  height: 180px;
  left: -90px;
  top: 18%;
  background: #3e3e3e;
  border-radius: 50%;
  opacity: 0.7;
  z-index: 1;
}

/* Ring Circle */
.ring-circle {
  position: absolute;
  width: 260px;
  height: 260px;
  right: 10%;
  bottom: 04%;
  border: 8px solid #ffd77a;
  border-radius: 50%;
  opacity: 0.4;
  z-index: 1;
}

/* Dot Pattern Grid */
.dot-grid {
  position: absolute;
  width: 300px;
  height: 250px;
  right: 16%;
  top: 50%;
  transform: translateY(-50%);
  background-image: radial-gradient(
    circle,
    #2d2d2d 2.5px,
    transparent 2.5px
  );
  background-size: 18px 18px;
  opacity: 0.8;
  z-index: 4;
}

/* Large Letter Graphic */
.letter-graphic {
  position: absolute;
  font-size: 24rem;
  font-weight: 900;
  color: #2d2d2d;
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
  z-index: 5;
  opacity: 0.95;
  letter-spacing: -0.05em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  user-select: none;
  pointer-events: none;
}

/* ========== ANIMATIONS ========== */

@keyframes floatCircle {
  0%, 100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(-8px);
  }
}

@keyframes floatSmall {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-12px) scale(1.05);
  }
}

@keyframes pulseDots {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .circle-large {
    animation: floatCircle 6s ease-in-out infinite;
  }
  .circle-small {
    animation: floatSmall 4s ease-in-out infinite;
  }
  .dot-grid {
    animation: pulseDots 3s ease-in-out infinite;
  }
}

@media (prefers-reduced-motion: reduce) {
  .circle-large,
  .circle-small,
  .dot-grid {
    animation: none !important;
  }
}

/* ========== RESPONSIVE ========== */

@media (max-width: 1200px) {
  .letter-graphic {
    font-size: 20rem;
    right: -3%;
  }
  .circle-large {
    width: 420px;
    height: 420px;
  }
}

@media (max-width: 980px) {
  .hero {
    padding: 3.5rem 1.5rem;
    min-height: 360px;
  }
  
  .letter-graphic {
    font-size: 16rem;
    right: -6%;
  }
  
  .circle-large {
    width: 340px;
    height: 340px;
  }
  
  .circle-medium {
    width: 130px;
    height: 130px;
  }
  
  .dot-grid {
    width: 240px;
    height: 200px;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .content-wrapper {
    max-width: 480px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem;
    min-height: 340px;
  }
  
  .content-wrapper {
    max-width: 100%;
  }
  
  /* Simplify geometric elements on mobile */
  .letter-graphic {
    font-size: 12rem;
    right: -12%;
    opacity: 0.7;
  }
  
  .circle-large {
    width: 260px;
    height: 260px;
    right: -8%;
  }
  
  .circle-medium {
    width: 90px;
    height: 90px;
    right: 2%;
    top: 6%;
  }
  
  .circle-small,
  .ring-circle {
    display: none;
  }
  
  .dot-grid {
    width: 160px;
    height: 140px;
    right: 8%;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .title {
    font-size: 1.3rem;
  }
  
  .tagline {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2.5rem 1.25rem;
    min-height: 320px;
  }
  
  .letter-graphic {
    font-size: 9rem;
    right: -18%;
  }
  
  .circle-large {
    width: 190px;
    height: 190px;
    right: -12%;
  }
  
  .half-circle {
    width: 130px;
    height: 130px;
    left: -65px;
  }
  
  .name {
    font-size: 1.75rem;
  }
  
  .tagline {
    font-size: 0.95rem;
  }
}

@media (hover: none) and (pointer: coarse) {
  .hero {
    padding: 3rem 1.5rem;
    min-height: 180px;
  }
}
</style>