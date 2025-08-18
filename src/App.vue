<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Education />
    </main>
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
/* CSS Here */
</style>
