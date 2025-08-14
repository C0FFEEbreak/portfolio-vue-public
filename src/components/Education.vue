<template>
  <section class="education" id="education">
    <!-- Top row -->
    <h1 class="section-title">Education</h1>

    <!-- Bottom row -->
    <div class="education-grid">
      <!-- Column 1: Education items -->
      <div class="education-timeline">
        <div
          v-for="(item, index) in education"
          :key="index"
          class="timeline-content"
        >
          <h2>{{ item.school }}</h2>
          <p class="degree">{{ item.degree }}</p>
          <span class="dates">{{ item.dates }}</span>
        </div>
      </div>

      <!-- Column 2: WordSphere -->
      <div class="education-sphere">
        <WordSphere :words="courses" />
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
        {
          school: "Ivy Tech State College",
          degree: "A.A.S., IT Web Management",
          dates: "1998 – 2001"
        },
        {
          school: "Indiana University Bloomington",
          degree: "Coursework in Computer Science",
          dates: "1998 – 2000"
        }
      ],
      courses: [
        "Multimedia",
        "Visual Communications",
        "Electronic Imaging",
        "Graphics Design",
        "Digital Publication",
        "Typography",
        "Network Fundamentals",
        "Computer Science"
      ]
    };
  }
};
</script>

<style scoped>
.education {
  padding: 4rem 2rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
}

/* Grid layout */
.education-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

/* Timeline items (no vertical line) */
.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Blue dot + content */
.timeline-content {
  position: relative;
  padding-left: 2rem;
}

.timeline-content::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  /* background: #4cafef; */
  background: #76A8BC;
  border-radius: 50%;
}

.timeline-content h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #E0E0E0;
}

.timeline-content .degree {
  margin: 0.3rem 0 0.2rem;
  font-weight: 500;
  color: #B0B0B0;
}

.timeline-content .dates {
  font-size: 0.9rem;
  color: #9C9C9C;
}

/* WordSphere column */
.education-sphere {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive: stack columns on mobile */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .education-sphere {
    margin-top: 2rem;
  }

  .timeline-content {
    padding-left: 1.5rem;
  }

  .timeline-content::before {
    left: 0;
  }
}
</style>
