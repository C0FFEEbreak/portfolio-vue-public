<template>
<section class="skills" id="skills">
  <div class="skills-header">
    <h1 class="section-title">Skills</h1>
    <hr />
  </div>

  <div class="skill-column" v-for="(skill, index) in skills" :key="index">
    <div class="skill-header">
      <div class="skill-icon">
        <img :src="skill.icon" :alt="skill.title" />
      </div>
      <div class="skill-title">{{ skill.title }}</div>
    </div>
    <div class="skill-list">
      <span class="skill-item" v-for="(item, i) in skill.items" :key="i">{{ item }}</span>
    </div>
  </div>
</section>

</template>

<script setup>
const skills = [
  {
    icon: new URL("../assets/icons/icon-web.svg", import.meta.url).href,
    title: "Web Development",
    items: ["AngularJS", "Bootstrap", "CSS3", "HTML5", "JavaScript", "jQuery", "UI/UX Design", "Vue.js", "WordPress"]
  },
  {
    icon: new URL("../assets/icons/icon-authoring.svg", import.meta.url).href,
    title: "Authoring Tools",
    items: ["Articulate Storyline", "Articulate Rise", "Captivate", "Lectora"]
  },
  {
    icon: new URL("../assets/icons/icon-media.svg", import.meta.url).href,
    title: "Media Tools",
    items: ["After Effects", "Adobe Animate", "Audacity", "Camtasia", "Premiere Pro"]
  },
  {
    icon: new URL("../assets/icons/icon-deign.svg", import.meta.url).href,
    title: "Design",
    items: ["Illustrator", "Photoshop"]
  },
  {
    icon: new URL("../assets/icons/icon-accessibility.svg", import.meta.url).href,
    title: "Accessibility",
    items: ["508 Compliance", "QA Testing", "SCORM"]
  },
  {
    icon: new URL("../assets/icons/icon-other.svg", import.meta.url).href,
    title: "Other",
    items: ["Adobe Acrobat", "LMS", "MS Office", "Technical Support", "Version Control"]
  }
];
</script>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-column {
  display: flex;
  flex-direction: column;
  border: 1px solid #9DA3A4;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.skill-column:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* Top row */
.skill-header {
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  background: linear-gradient(180deg, #101719, #202E32);
  padding: 0.75rem;
  gap: 0.5rem;
}

.skill-icon img {
  width: 40px;
  height: 40px;
  display: block;
  margin: auto;
}

.skill-title {
  font-weight: bold;
  letter-spacing: 0.03em;
  color: #fff;
  line-height: 1.4;
  word-break: break-word;
}

/* Skills list */
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem;
}

.skill-item {
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  background-color: #29353C;
  color: #C5C6BF;
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.skill-item:hover {
  transform: scale(1.05);
  background-color: #3b444b;
}
.skills-header {
  grid-column: 1 / -1; /* makes the title+hr span all columns */
}

/* Responsive */
@media (max-width: 1024px) {
  .skills {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skills {
    grid-template-columns: 1fr;
  }
}
</style>
