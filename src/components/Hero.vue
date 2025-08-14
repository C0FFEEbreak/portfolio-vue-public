<template>
  <section class="hero">
    <h1 class="name">{{ name }}</h1>
    <p class="title">
      I'm a <span ref="typed"></span>
    </p>
    <p class="tagline">{{ tagline }}</p>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js";

const name = "Hi, I'm Stacey Trent Donica.";
const tagline = "I build clean, accessible websites and web apps.";

const typed = ref(null);

onMounted(() => {
  new Typed(typed.value, {
    strings: ["Front-End Developer", "Courseware Developer", "Graphic Designer", "Media Creator"],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 2500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 4rem;
  /* keep your original padding */
  background-color: #29353C; /* fallback color */
  background-image: url('@/assets/blurry-gradient-haikei.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; /* or contain, depending on your SVG */
  text-align: left;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #76A8BC;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  /* Keep inline to prevent layout issues */
  white-space: nowrap; /* prevents weird breaks */
  color: #76A8BC;
}

.tagline {
  font-size: 1rem;
  max-width: 100%;
  margin: 0 auto;
}

/* Optional: style the typed span */
.title > span {
  border-right: 2px solid #000; /* mimic cursor if needed */
  padding-right: 2px;
  white-space: nowrap;
  display: inline-block;
}
</style>
