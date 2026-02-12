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
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";
import img4 from "@/assets/04.jpg";
import img5 from "@/assets/05.jpg";
import img1 from "@/assets/01.jpg";
import img12 from "@/assets/12.jpg";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Multiple Choice Quiz",
          image: img10,
          url: "https://c0ffeebreak.github.io/react-quiz/",
          footerText: "Multiple Choice",
          alt: "Screenshot of multiple choice quiz",
          description: "A fully responsive multiple choice quiz application with accessiblity.",
          tech: ['html', 'css', 'react']
        },
        {
          title: "Travel Planner",
          image: img11,
          url: "https://c0ffeebreak.github.io/planner-travel/",
          footerText: "Planner",
          alt: "Screenshot of travel planner todo checklist",
          description: "The app includes dynamic lists, task scoring and progress totals for user travel planning.",
          tech: ['html', 'css', 'react']
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
          title: "Content Reveal Activity",
          image: img5,
          url: "https://codepen.io/coffeebreaks/pen/gOqdMMK",
          footerText: "Click to Reveal",
          alt: "Screenshot of travel activity",
          description: "Click-to-reveal activity with interactive content elements.",
          tech: ['html', 'css', 'js']
        },
        {
          title: "Business Website",
          image: img1,
          url: "https://c0ffeebreak.github.io/react-paw-spa/",
          footerText: "Paw Spa",
          alt: "Screenshot of animal website",
          description: "A responsive website with service showcase and contact information.",
          tech: ['html', 'css', 'react']
        },
        {
          title: "Todo Checklist",
          image: img12,
          url: "https://c0ffeebreak.github.io/react-checklist/",
          footerText: "Checklist & Fetch",
          alt: "Screenshot of todo checklist",
          description: "Interactive todo app with progress tracking and data fetching display.",
          tech: ['html', 'css', 'react']
        }
      ]
    };
  },
  methods: {
    getTechLabel(tech) {
      const labels = {
        html: 'HTML5',
        css: 'CSS3',
        js: 'JavaScript',
        react: 'React'
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
  background: #C9CAC4;
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
  
  /* Initial state */
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Animate when card is visible */
.project-card.is-visible .card-main-text {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger after the image animation */
.project-card:nth-child(3n+1).is-visible .card-main-text { 
  transition-delay: 500ms; /* 200ms card + 300ms for image to mostly appear */
}
.project-card:nth-child(3n+2).is-visible .card-main-text { 
  transition-delay: 600ms; 
}
.project-card:nth-child(3n+3).is-visible .card-main-text { 
  transition-delay: 700ms; 
}

/* Description text */
.card-description {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
  
  /* Initial state */
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Animate when card is visible */
.project-card.is-visible .card-description {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger after the title animation */
.project-card:nth-child(3n+1).is-visible .card-description { 
  transition-delay: 700ms; /* 200ms after title starts */
}
.project-card:nth-child(3n+2).is-visible .card-description { 
  transition-delay: 800ms; 
}
.project-card:nth-child(3n+3).is-visible .card-description { 
  transition-delay: 900ms; 
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

.tech-icon[data-tech="react"] {
  background-color: #948392;
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
  .card-main-text,
  .card-description {
    transition: none;
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) { 
  .projects-grid { 
    grid-template-columns: repeat(2, 1fr); 
  }
  .project-card:nth-child(2n+1).is-visible { transition-delay: 0ms; }
  .project-card:nth-child(2n+2).is-visible { transition-delay: 100ms; } 
  .project-card:nth-child(2n+1).is-visible .card-main-text { 
    transition-delay: 500ms; 
  }
  .project-card:nth-child(2n+2).is-visible .card-main-text { 
    transition-delay: 600ms; 
  }
  
  .project-card:nth-child(2n+1).is-visible .card-description { 
    transition-delay: 700ms; 
  }
  .project-card:nth-child(2n+2).is-visible .card-description { 
    transition-delay: 800ms; 
  }
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
  .project-card.is-visible .card-main-text { 
    transition-delay: 500ms; 
  }
  .project-card.is-visible .card-description { 
    transition-delay: 700ms; 
  }
}
</style>