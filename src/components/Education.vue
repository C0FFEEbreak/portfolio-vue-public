<template>
  <section class="education" id="education">
    <!-- Title with circles wrapper -->
    <div v-intersect class="title-with-circles">
      <div class="title-circles">
        <div class="circle-yellow"></div>
        <div class="circle-blue"></div>
      </div>
      <h1 class="section-title">Education</h1>
    </div>
    
    <!-- HR line animation -->
    <hr v-intersect />
    <div v-intersect="{ duration: '300ms' }" class="fade-in-section">

      <div class="education-grid">
        <!-- Timeline column -->
        <div class="education-timeline" ref="timeline">
          <div
            v-for="(item, index) in education"
            :key="index"
            class="timeline-content"
            :class="{ 'is-visible': timelineVisible }"
            :style="{ '--item-index': index }"
          >
            <!-- Row that contains dot + school name -->
            <div class="timeline-row">
              <span class="timeline-dot" aria-hidden="true"></span>
              <h2 class="school">{{ item.school }}</h2>
            </div>

            <p class="degree">{{ item.degree }}</p>
            <time class="dates" :datetime="item.machineDates">{{ item.dates }}</time>
          </div>
        </div>

        <!-- WordSphere column -->
        <div class="education-sphere-wrapper">
          <div class="wavy-border">
            <div class="education-sphere" aria-hidden="true">
              <WordSphere :words="courses" />
            </div>
          </div>

          <ul class="sr-only" aria-label="Courses studied">
            <li v-for="(c, i) in courses" :key="i">{{ c }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WordSphere from "@/components/WordSphere.vue";

export default {
  name: "Education",
  components: { WordSphere },
  data() {
    return {
      timelineVisible: false,
      education: [
        {
          school: "Ivy Tech State College",
          degree: "A.A.S., IT Web Management"
          // dates: "1998 – 2001"
        },
        {
          school: "Indiana University Bloomington",
          degree: "Coursework in Computer Science"
          // dates: "1998 – 2000"
        },
        {
          school: "Professional Development",
          degree: "Modern Web Technologies & Accessibility Standards",
          dates: "Ongoing"
        }
      ],
      courses: [
        "Multimedia",
        "Visual Communications",
        "Digital Imaging",
        "Database Management",
        "Graphic Design",
        "Electronic Publication",
        "Typography",
        "Network Fundamentals",
        "Computer Science",
        "3D Rendering & Animation",
        "System Analysis"
      ]
    };
  },
  mounted() {
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupObserver() {
      const options = {
        root: null,
        threshold: 0.5,
        rootMargin: '-100px 0px'
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.timelineVisible) {
            this.timelineVisible = true;
          }
        });
      }, options);

      if (this.$refs.timeline) {
        this.observer.observe(this.$refs.timeline);
      }
    }
  }
};
</script>

<style scoped>
.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0);
  white-space: nowrap; border: 0;
}

/* two columns */
.education-grid {
  display: flex;
  gap: 2rem;                
  justify-content: center;  
  align-items: center;      
  flex-wrap: nowrap;
}

/* timeline column */
.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center; /* center the column itself horizontally */
}

/* timeline items */
.timeline-content {
  width: 100%;
  max-width: 380px;
  text-align: left;
  box-sizing: border-box;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 500ms ease, transform 500ms ease;
  transition-delay: calc(var(--item-index) * 150ms);
  will-change: opacity, transform;
}

.timeline-content.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-row {
  display: flex;
  align-items: flex-start; /* <-- fix: top align by default */
  gap: 0.6rem;
}

/* dot */
.timeline-dot {
  width: 12px;
  height: 12px;
  background: #76A8BC;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px; /* small visual nudge to sit next to first text line */
}

/* school title */
.timeline-row .school {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: #EBECE9;
  line-height: 1.15;
}

/* degree and dates */
.degree,
.dates {
  margin-left: calc(12px + 0.6rem);
  display: block;
}

.degree {
  margin-top: 0.2rem;
  color: #CECFC9;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.dates {
  color: #9B9D90;
  font-size: 0.9rem;
}

/* Wavy border */
.wavy-border {
  --s: 360px;
  width: var(--s);
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9DA3A4;
  -webkit-mask: var(--m);
  mask: var(--m);
  --g:/calc(var(--s)*0.198) calc(var(--s)*0.198)
    radial-gradient(50% 50%, #000 99%, #0000 101%) no-repeat;
  --m: 
    calc(50% + var(--s)*0.373) calc(50% + var(--s)*0) var(--g),
    calc(50% + var(--s)*0.301) calc(50% + var(--s)*0.219) var(--g),
    calc(50% + var(--s)*0.115) calc(50% + var(--s)*0.354) var(--g),
    calc(50% + var(--s)*-0.115) calc(50% + var(--s)*0.354) var(--g),
    calc(50% + var(--s)*-0.301) calc(50% + var(--s)*0.219) var(--g),
    calc(50% + var(--s)*-0.373) calc(50% + var(--s)*0) var(--g),
    calc(50% + var(--s)*-0.301) calc(50% + var(--s)*-0.219) var(--g),
    calc(50% + var(--s)*-0.115) calc(50% + var(--s)*-0.354) var(--g),
    calc(50% + var(--s)*0.115) calc(50% + var(--s)*-0.354) var(--g),
    calc(50% + var(--s)*0.301) calc(50% + var(--s)*-0.219) var(--g),
    radial-gradient(calc(var(--s)*0.438), #000 99%, #0000 101%) subtract,
    calc(50% + var(--s)*0.49) calc(50% + var(--s)*0.159) var(--g),
    calc(50% + var(--s)*0.303) calc(50% + var(--s)*0.417) var(--g),
    calc(50% + var(--s)*0) calc(50% + var(--s)*0.515) var(--g),
    calc(50% + var(--s)*-0.303) calc(50% + var(--s)*0.417) var(--g),
    calc(50% + var(--s)*-0.49) calc(50% + var(--s)*0.159) var(--g),
    calc(50% + var(--s)*-0.49) calc(50% + var(--s)*-0.159) var(--g),
    calc(50% + var(--s)*-0.303) calc(50% + var(--s)*-0.417) var(--g),
    calc(50% + var(--s)*0) calc(50% + var(--s)*-0.515) var(--g),
    calc(50% + var(--s)*0.303) calc(50% + var(--s)*-0.417) var(--g),
    calc(50% + var(--s)*0.49) calc(50% + var(--s)*-0.159) var(--g);
}

/* Inner blue sphere with words */
.education-sphere {
  width: 284px;
  height: 284px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.word-sphere {
  position: relative;
  width: 300px;
  aspect-ratio: 1;
  border-radius: 50%;
  border-style: solid;
  border-color: #fff;
  border-width: 1px;
  background-color: #C5C6BF;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.word-sphere::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('@/assets/icons/icon-education.svg') center/80% no-repeat;
  opacity: 0.15;
  pointer-events: none;
}

/* Fade-in (kept) */
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

/* responsive tweaks */
@media (prefers-reduced-motion: reduce) {
  .fade-in-section,
  .fade-in-section.is-visible,
  .timeline-content,
  .timeline-content.is-visible { 
    transition: none; 
    transform: none; 
  }
}

@media (max-width: 768px) {
  .education-grid {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  .education-timeline {
    align-items: center;
    width: 100%;
  }
  .timeline-content {
    max-width: 460px;
    padding-inline: 1rem;
  }

  .degree,
  .dates {
    margin-left: calc(12px + 0.6rem);
  }

  .education-sphere {
    width: 260px;
    height: 260px;
    padding: 8px;
  }
}

@media (min-width: 720px) {
  .timeline-row { align-items: center; }
}

@media (max-width: 420px) {
  .timeline-content {
    padding-inline: 0.75rem;
    max-width: 100%;
  }
  .education-sphere {
    width: 220px;
    height: 220px;
  }
  .timeline-dot { margin-top: 4px; }
}
</style>