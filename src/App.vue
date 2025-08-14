<template>
  <div id="app">
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Experiences />
    <Education />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experiences from './components/Experiences.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
#app {
  font-family: sans-serif;
  max-width: 900px;
  margin: auto;
  padding: 1rem;
}
</style>
