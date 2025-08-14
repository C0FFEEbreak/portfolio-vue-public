<template>
  <header class="site-header">
    <nav>
      <ul>
        <li v-for="(link, index) in navLinks" :key="link.name">
          <a :href="link.url">{{ link.name }}</a>
          <!-- Separator: only add if not last item -->
          <span v-if="index < navLinks.length - 1" class="separator"></span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const navLinks = [
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Experiences", url: "#experiences" },
  { name: "Education", url: "#education" },
];
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;

  /* Dark glassmorphism */
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.site-header nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.site-header nav ul li {
  display: flex;
  align-items: center;
}

.site-header nav ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  transition: background 0.2s ease, color 0.2s ease;
}

.site-header nav ul li a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffd77a;
}

.separator {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  animation: pulse 3s ease-in-out infinite;
  margin-left: 1rem;
}

@keyframes pulse {
  0%, 100% {
    background: rgba(255, 255, 255, 0.4);
  }
  50% {
    background: rgba(255, 215, 122, 0.8); /* warm gold mid-pulse */
  }
}

/* Responsive */
@media (max-width: 768px) {
  .site-header {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
  .site-header nav ul {
    gap: 0.75rem;
  }
  .separator {
    display: none;
  }
}
</style>
