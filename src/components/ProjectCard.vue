<template>
  <div class="card">
    <img :src="project.image" :alt="project.title" />
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a :href="project.link" target="_blank">View Project</a>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
</style>
