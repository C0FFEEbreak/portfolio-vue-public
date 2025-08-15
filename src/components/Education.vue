<template>
  <section class="base-section education" id="education">
    <h1 class="section-title">Education</h1>
    <hr />


    <div class="section-content">
      <!-- Education Timeline -->
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

      <!-- WordSphere -->
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
/* Shared base section layout */
.base-section {
  padding: 4rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 60px;
  height: 4px;
  background-color: #76A8BC;
  border: none;
  margin: 0 auto 2.5rem auto;
  border-radius: 2px;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

/* Education Timeline */
.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}

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

/* Responsive */
@media (max-width: 768px) {
  .section-content {
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
