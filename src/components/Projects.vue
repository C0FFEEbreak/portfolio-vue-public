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
    <div v-intersect="{ duration: '300ms' }" class="fade-in-section">
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
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
                :title="getTechLabel(tech)"
              >
                {{ tech.toUpperCase()[0] }}
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
          tech: ['js', 'html', 'css']
        },
        {
          title: "Interactive Quiz",
          image: img2,
          url: "https://codepen.io/coffeebreaks/pen/RwvvpBM",
          footerText: "Multiple Choice",
          alt: "Screenshot of nature activity",
          description: "Multi-question quiz with instant feedback and score tracking.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Restaurant Website",
          image: img3,
          url: "https://codepen.io/coffeebreaks/pen/wvOBKNx",
          footerText: "Yume Poke",
          alt: "Screenshot of restaurant website",
          description: "Mobile-optimized restaurant site with menu display and location info.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Hotspot Activity",
          image: img4,
          url: "https://codepen.io/coffeebreaks/pen/NWojJwP",
          footerText: "Click to Reveal",
          alt: "Screenshot of sports activity",
          description: "Interactive image with clickable hotspots revealing hidden content.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Image Reveal Game",
          image: img5,
          url: "https://codepen.io/coffeebreaks/pen/gOqdMMK",
          footerText: "Click to Reveal",
          alt: "Screenshot of travel activity",
          description: "Click-to-reveal activity with interactive image elements.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Task Checklist",
          image: img6,
          url: "https://codepen.io/coffeebreaks/pen/QWYEjeR",
          footerText: "Checklist",
          alt: "Screenshot of checklist",
          description: "Dynamic checklist with add/remove functionality using local storage.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Calculator Tool",
          image: img7,
          url: "https://codepen.io/coffeebreaks/pen/gOqMVmd",
          footerText: "Calculator",
          alt: "Screenshot of calculator",
          description: "Functional calculator with keyboard input support and basic operations.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Content Reveal",
          image: img9,
          url: "https://codepen.io/coffeebreaks/pen/bGZejrP",
          footerText: "Click to Reveal",
          alt: "Screenshot of sports activity",
          description: "Interactive content reveal with smooth CSS animations.",
          tech: ['js', 'html', 'css']
        },
        {
          title: "Stopwatch Timer",
          image: img8,
          url: "https://codepen.io/coffeebreaks/pen/oNmLZoq",
          footerText: "Stopwatch",
          alt: "Screenshot of JS stopwatch",
          description: "Precise stopwatch with start, stop, and reset functionality.",
          tech: ['js', 'html', 'css']
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

.project-card a:hover .card-image { 
  transform: scale(1.05); 
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
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  border-top: 1px solid #b0b0b0;
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
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
  cursor: help;
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

/* Tooltip on hover */
.tech-icon::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  margin-bottom: 4px;
  z-index: 10;
}

.tech-icon:hover::after {
  opacity: 1;
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
}

@media (max-width: 600px) { 
  .projects-grid { 
    grid-template-columns: 1fr; 
    gap: 68px; 
  }
  
  .tech-icon {
    width: 24px;
    height: 24px;
    font-size: 0.65rem;
  }
  
  .card-footer {
    padding: 0.6rem 0.8rem;
  }
  
  .footer-text {
    font-size: 0.85rem;
  }
}
</style>