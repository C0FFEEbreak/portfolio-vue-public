<template>
  <section class="hero">
    <div id="tsparticles" />
    <div class="hero-content">
      <h1 class="name">{{ name }}</h1>
      <p class="title">
        I'm a <span ref="typed"></span>
      </p>
      <p class="tagline">{{ tagline }}</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { tsParticles as tsparticlesInstance, loadFull } from "tsparticles";
import Typed from "typed.js";

const name = "Hi, I'm JD";
const tagline = "I build clean, accessible websites and web apps.";

const typed = ref(null);

onMounted(async () => {
  new Typed(typed.value, {
    strings: ["Front-End Developer", "Graphic Designer", "Course Developer"],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });

  await loadFull(tsparticlesInstance); // load all features

  tsparticlesInstance.load("tsparticles", {
    particles: {
      number: { value: 50 },
      move: { enable: true, speed: 0.1 },
      size: { value: 3 },
      links: { enable: true, distance: 150, opacity: 0.1 },
    },
    interactivity: {
      events: { onhover: { enable: false }, onclick: { enable: false } },
    },
    detectRetina: true,
  });
});
</script>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: 4rem 1rem;
  overflow: hidden;
  min-height: 300px;
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  white-space: nowrap;
}

.title > span {
  display: inline-block;
  white-space: nowrap;
  border-right: 2px solid #000;
  padding-right: 2px;
}

.tagline {
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}
</style>
