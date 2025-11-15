<template>
  <section class="projects" id="projects" aria-label="Project portfolio">
    <!-- fade-in -->
    <div v-intersect="{ duration: '300ms' }" class="fade-in-section">
    <h1 class="section-title">Projects</h1>
    <hr />

    <div class="projects-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <a :href="project.url" target="_blank" rel="noopener noreferrer">
          <img :src="project.image" :alt="project.alt" class="card-image" />
        </a>

        <div class="card-main-text">{{ project.title }}</div>

        <div class="card-footer">
          <div class="footer-text">{{ project.footerText }}</div>
          <div class="footer-icon">
            <img :src="project.icon" alt="CodePen icon" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import img1 from "@/assets/01.jpg";
import img2 from "@/assets/02.jpg";
import img3 from "@/assets/03.jpg";
import img4 from "@/assets/04.jpg";
import img5 from "@/assets/05.jpg";
import img6 from "@/assets/06.jpg";
import img7 from "@/assets/07.jpg";
import img8 from "@/assets/08.jpg";
import img9 from "@/assets/09.jpg";
import icon1 from "@/assets/icons/icon-codepen.png";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { title: "Website", image: img1, url: "https://codepen.io/coffeebreaks/pen/ZEPbXgJ", footerText: "Paw Spa Grooming", icon: icon1,
          alt: "Screenshot of animal website", },
        { title: "Web Activity", image: img2, url: "https://codepen.io/coffeebreaks/pen/RwvvpBM", footerText: "Multiple Choice", icon: icon1,
          alt: "Screenshot of nature activity", },
        { title: "Website", image: img3, url: "https://codepen.io/coffeebreaks/pen/wvOBKNx", footerText: "Yume Poke", icon: icon1,
          alt: "Screenshot of restaurant website", },
        { title: "Web Activity", image: img4, url: "https://codepen.io/coffeebreaks/pen/NWojJwP", footerText: "Click to Reveal", icon: icon1,
          alt: "Screenshot of sports activity", },
        { title: "Web Activity", image: img5, url: "https://codepen.io/coffeebreaks/pen/gOqdMMK", footerText: "Click to Reveal", icon: icon1,
          alt: "Screenshot of travel activity", },
        { title: "JS Tool", image: img6, url: "https://codepen.io/coffeebreaks/pen/QWYEjeR", footerText: "Checklist", icon: icon1,
          alt: "Screenshot of checklist", },
        { title: "JS Tool", image: img7, url: "https://codepen.io/coffeebreaks/pen/gOqMVmd", footerText: "Calculator", icon: icon1,
          alt: "Screenshot of calculator", },
        { title: "Web Activity", image: img9, url: "https://codepen.io/coffeebreaks/pen/bGZejrP", footerText: "Click to Reveal", icon: icon1,
          alt: "Screenshot of sports activity", },
        { title: "JS Tool", image: img8, url: "https://codepen.io/coffeebreaks/pen/oNmLZoq", footerText: "Stopwatch", icon: icon1,
          alt: "Screenshot of JS stopwatch", }
      ]
    };
  }
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: #C5C6BF;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.project-card a:hover .card-image { transform: scale(1.05); }

.card-main-text {
  padding: 1rem;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid #C5C6BF;
}

.card-footer {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0.8rem 1rem;
}

.footer-text { 
  font-size: 0.9rem; 
  color: #333;
}

.footer-icon img { 
  width: 20px; 
  height: 20px; 
  alt: "CodePen logo";
}

/* Fade-in */
.fade-in-section {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 420ms ease, transform 420ms ease;
  will-change: opacity, transform;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .fade-in-section,
  .fade-in-section.is-visible {
    transition: none;
    transform: none;
  }
}

@media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr; gap: 68px; } }
</style>
