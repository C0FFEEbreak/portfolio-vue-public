<template>
  <section class="education" id="education">
    <!-- fade-in -->
    <div v-intersect="{ duration: '300ms' }" class="fade-in-section">
      <h1 class="section-title">Education</h1>
      <hr />

      <div class="education-grid">
        <!-- Timeline column -->
        <div class="education-timeline">
          <div
            v-for="(item, index) in education"
            :key="index"
            class="timeline-content"
          >
            <!-- Row that contains dot + school name -->
            <div class="timeline-row">
              <span class="timeline-dot" aria-hidden="true"></span>
              <h2 class="school">{{ item.school }}</h2>
            </div>

            <p class="degree">{{ item.degree }}</p>
            <span class="dates">{{ item.dates }}</span>
          </div>
        </div>

        <!-- WordSphere column -->
<div class="education-sphere-wrapper">
  <div class="wavy-border">
        <div class="education-sphere" aria-hidden="false">
          <WordSphere :words="courses" />
        </div>
      </div>
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
      education: [
        { school: "Ivy Tech State College", degree: "A.A.S., IT Web Management", dates: "1998 – 2001" },
        { school: "Indiana University Bloomington", degree: "Coursework in Computer Science", dates: "1998 – 2000" }
      ],
      courses: [
        "Multimedia",
        "Visual Communications",
        "Digital Imaging",
        "Database Management",
        "Graphics Design",
        "Electronic Publication",
        "Typography",
        "Network Fundamentals",
        "Computer Science",
        "3D Rendering & Animation",
        "System Analysis"
      ]
    };
  }
};
</script>

<style scoped>
/* two columns */
.education-grid {
  display: flex;
  gap: 2rem;                /* space between timeline and WordSphere */
  justify-content: center;  /* center both columns */
  align-items: center;      /* vertically center WordSphere relative to timeline */
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
}

/* dot + school row */
.timeline-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

/* dot */
.timeline-dot {
  width: 12px;
  height: 12px;
  background: #76A8BC;
  border-radius: 50%;
  flex-shrink: 0;
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
  --s: 360px; /* border size */
  width: var(--s);
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #9DA3A4; /* border color */
  -webkit-mask: var(--m);
  mask: var(--m);

  /* Mask */
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

@media (max-width: 420px) {
  .timeline-content {
    padding-inline: 0.75rem;
    max-width: 100%;
  }
  .education-sphere {
    width: 220px;
    height: 220px;
  }
.timeline-row {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}
.timeline-dot {
  margin-top: 4px;
}
}
</style>
