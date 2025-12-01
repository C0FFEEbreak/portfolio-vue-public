<template>
  <section class="projects" id="projects" aria-label="Project portfolio">
    <!-- Title with circles wrapper -->
    <div v-intersect class="title-with-circles">
      <div class="title-circles">
        <div class="circle-yellow"></div>
        <div class="circle-blue"></div>
      </div>
      <h1 class="section-title">Projects</h1>
    </div>
    
    <!-- HR line animation -->
    <hr v-intersect />

    <!-- Content fade-in -->
    <div v-intersect="{ duration: '300ms' }">
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card" v-intersect>
          <a :href="project.url" target="_blank" rel="noopener noreferrer">
            <img :src="project.image" :alt="project.alt" class="card-image" />
          </a>

          <div class="card-content">
            <div class="card-main-text">{{ project.title }}</div>
            
            <!-- Description -->
            <p v-if="project.description" class="card-description">
              {{ project.description }}
            </p>
          </div>

          <div class="card-footer">
            <div class="footer-text">{{ project.footerText }}</div>
            <div class="tech-icons">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="tech-icon"
                :data-tech="tech"
              >
                {{ tech.toUpperCase() }}
              </span>
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

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Business Website",
          image: img1,
          url: "https://codepen.io/coffeebreaks/pen/ZEPbXgJ",
          footerText: "Paw Spa",
          alt: "Screenshot of animal website",
          description: "Responsive multi-page website with service showcase and contact information.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Interactive Quiz",
          image: img2,
          url: "https://codepen.io/coffeebreaks/pen/RwvvpBM",
          footerText: "Multiple Choice",
          alt: "Screenshot of nature activity",
          description: "Multi-question quiz with instant feedback and score tracking.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Restaurant Website",
          image: img3,
          url: "https://codepen.io/coffeebreaks/pen/wvOBKNx",
          footerText: "Yume Poke",
          alt: "Screenshot of restaurant website",
          description: "Mobile-optimized restaurant site with menu display and location info.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Hotspot Activity",
          image: img4,
          url: "https://codepen.io/coffeebreaks/pen/NWojJwP",
          footerText: "Click to Reveal",
          alt: "Screenshot of sports activity",
          description: "Interactive image with clickable hotspots revealing hidden content.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Image Reveal Game",
          image: img5,
          url: "https://codepen.io/coffeebreaks/pen/gOqdMMK",
          footerText: "Click to Reveal",
          alt: "Screenshot of travel activity",
          description: "Click-to-reveal activity with interactive image elements.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Task Checklist",
          image: img6,
          url: "https://codepen.io/coffeebreaks/pen/QWYEjeR",
          footerText: "Checklist",
          alt: "Screenshot of checklist",
          description: "Dynamic checklist with add/remove functionality using local storage.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Calculator Tool",
          image: img7,
          url: "https://codepen.io/coffeebreaks/pen/gOqMVmd",
          footerText: "Calculator",
          alt: "Screenshot of calculator",
          description: "Functional calculator with keyboard input support and basic operations.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Content Reveal",
          image: img9,
          url: "https://codepen.io/coffeebreaks/pen/bGZejrP",
          footerText: "Click to Reveal",
          alt: "Screenshot of sports activity",
          description: "Interactive content reveal with smooth CSS animations.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Stopwatch Timer",
          image: img8,
          url: "https://codepen.io/coffeebreaks/pen/oNmLZoq",
          footerText: "Stopwatch",
          alt: "Screenshot of JS stopwatch",
          description: "Precise stopwatch with start, stop, and reset functionality.",
          tech: ['html', 'css', 'js']
        }
      ]
    };
  },
  methods: {
    getTechLabel(tech) {
      const labels = {
        html: 'HTML5',
        css: 'CSS3',
        js: 'JavaScript'
      };
      return labels[tech] || tech;
    }
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
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 420ms ease, transform 420ms ease;
  background: #C5C6BF;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animation for cards in the same row */
.project-card:nth-child(3n+1).is-visible { transition-delay: 0ms; }
.project-card:nth-child(3n+2).is-visible { transition-delay: 100ms; }
.project-card:nth-child(3n+3).is-visible { transition-delay: 200ms; }

.card-image {
  width: 90%;
  height: auto;
  border-radius: 50%;
	border: 6px solid #e2dddd; 
  box-shadow: 0 0 20px 4px rgba(34, 34, 34, 0.1);
  display: block;
  margin: auto;
  margin-top: 8px;
  
  /* Initial state - hidden and scaled down */
  opacity: 0;
  transform: scale(0.3);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
              opacity 0.6s ease;
}

/* When card becomes visible, animate the image */
.project-card.is-visible .card-image {
  opacity: 1;
  transform: scale(1);
}

/* Stagger the image animations after the card */
.project-card:nth-child(3n+1).is-visible .card-image { 
  transition-delay: 200ms; 
}
.project-card:nth-child(3n+2).is-visible .card-image { 
  transition-delay: 300ms; 
}
.project-card:nth-child(3n+3).is-visible .card-image { 
  transition-delay: 400ms; 
}

/* Hover effect */
.project-card a:hover .card-image { 
  transform: scale(1.05); 
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .card-image {
    transition: none;
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive stagger adjustments */
@media (max-width: 900px) { 
  .project-card:nth-child(2n+1).is-visible .card-image { 
    transition-delay: 200ms; 
  }
  .project-card:nth-child(2n+2).is-visible .card-image { 
    transition-delay: 300ms; 
  }
}

@media (max-width: 600px) { 
  .project-card.is-visible .card-image { 
    transition-delay: 200ms; 
  }
}

/* Card content wrapper */
.card-content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-main-text {
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  margin: 0;
}

/* Description text */
.card-description {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}

/* Card footer - project name + tech icons */
.card-footer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.8rem 1rem;
  border-top: 1px solid #b0b0b0;
  margin-top: auto;
}

.footer-text { 
  font-size: 0.9rem; 
  color: #666;
  font-weight: 500;
}

/* Tech icons in footer */
.tech-icons {
  display: flex;
  gap: 0.35rem;
}

.tech-icon {
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.tech-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.tech-icon[data-tech="html"] {
  background-color: #5F97AD;
}

.tech-icon[data-tech="css"] {
  background-color: #29353C;
}

.tech-icon[data-tech="js"] {
  background-color: #9DA3A4;
  color: #182025;
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

@media (max-width: 900px) { 
  .projects-grid { 
    grid-template-columns: repeat(2, 1fr); 
  }
  .project-card:nth-child(2n+1).is-visible { transition-delay: 0ms; }
  .project-card:nth-child(2n+2).is-visible { transition-delay: 100ms; }
}

@media (max-width: 600px) { 
  .projects-grid { 
    grid-template-columns: 1fr; 
    gap: 68px; 
  }
  .tech-icon {
    padding: 0.3rem 0.5rem;
    font-size: 0.65rem;
  }
  .card-footer {
    padding: 0.6rem 0.8rem;
  }
  .footer-text {
    font-size: 0.85rem;
  }
  .project-card.is-visible { transition-delay: 0ms; }
}
</style>