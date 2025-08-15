<template>
  <section class="projects" id="projects">
    <h1 class="section-title">Projects</h1>
    <hr />
    <div class="projects">
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <!-- Top Row: Clickable Image -->
          <a :href="project.url" target="_blank" rel="noopener noreferrer">
            <img :src="project.image" :alt="project.title" class="card-image" />
          </a>

          <!-- Second Row: Main Text -->
          <div class="card-main-text">
            {{ project.title }}
          </div>

          <!-- Third Row: Two Columns -->
          <div class="card-footer">
            <div class="footer-text">{{ project.footerText }}</div>
            <div class="footer-icon">
              <img :src="project.icon" alt="icon" />
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
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          title: "Website",
          image: img1,
          url: "https://example.com",
          footerText: "Paw Spa Grooming",
          icon: icon1,
        },
        {
          title: "Web Activity",
          image: img2,
          url: "https://example.com",
          footerText: "Multiple Choice",
          icon: icon1,
        },
        {
          title: "Website",
          image: img3,
          url: "https://example.com",
          footerText: "Yume Poke",
          icon: icon1,
        },
        {
          title: "Web Activity",
          image: img4,
          url: "https://example.com",
          footerText: "Click to Reveal",
          icon: icon1,
        },
        {
          title: "Web Activity",
          image: img5,
          url: "https://example.com",
          footerText: "Click to Reveal",
          icon: icon1,
        },
        {
          title: "JS Tool",
          image: img6,
          url: "https://example.com",
          footerText: "Checklist",
          icon: icon1,
        },
        {
          title: "JS Tool",
          image: img7,
          url: "https://example.com",
          footerText: "Calculator",
          icon: icon1,
        },
        {
          title: "Web Activity",
          image: img9,
          url: "https://example.com",
          footerText: "Click to Reveal",
          icon: icon1,
        },
        {
          title: "JS Tool",
          image: img8,
          url: "https://example.com",
          footerText: "Stopwatch",
          icon: icon1,
        },
        //
      ],
    };
  },
};
</script>

<style scoped>


.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
}

/* Card container with rounded corners & background */
.project-card {
  display: flex;
  flex-direction: column;
  background: #C5C6BF;
  overflow: hidden; /* so top corners are clean */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

/* Top row image with only top corners rounded */
.card-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}
.project-card a:hover .card-image {
  transform: scale(1.05);
}

/* Second row - main text */
.card-main-text {
  padding: 1rem;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid #C5C6BF;
}

/* Third row: two columns */
.card-footer {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0.8rem 1rem;
}

.projects .footer-text {
  font-size: 0.9rem;
  color: #555;
}

.footer-icon img {
  width: 20px;
  height: 20px;
}

/* Responsive Breakpoints */
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr; /* Mobile: 1 column */
  }
}
</style>
