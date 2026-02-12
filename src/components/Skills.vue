<template>
  <section class="skills" id="skills">
    <!-- Title with circles wrapper -->
    <div v-intersect class="title-with-circles">
      <div class="title-circles">
        <div class="circle-yellow"></div>
        <div class="circle-blue"></div>
      </div>
      <h1 class="section-title">Skills</h1>
    </div>
    
    <!-- HR line animation -->
    <hr v-intersect />
    
    <!-- Content fade-in -->
    <div v-intersect="{ duration: '300ms' }">
      <div class="skills-grid">
        <div class="skill-column" v-for="(skill, index) in skills" :key="index" v-intersect>
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
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { icon: new URL("../assets/icons/icon-web.svg", import.meta.url).href, title: "Web Development", items: ["AJAX", "AngularJS", "Bootstrap", "CSS3", "HTML5", "JavaScript", "jQuery", "React", "SQL", "TypeScript (learning)", "UI/UX Design", "Vue.js", "WordPress"] },
  { icon: new URL("../assets/icons/icon-authoring.svg", import.meta.url).href, title: "eLearning Development", items: ["Articulate Rise", "Articulate Storyline", "Captivate", "Lectora"] },
  { icon: new URL("../assets/icons/icon-media.svg", import.meta.url).href, title: "Media Tools", items: ["Adobe Animate", "After Effects", "Audacity", "Camtasia", "Premiere Pro"] },
  { icon: new URL("../assets/icons/icon-deign.svg", import.meta.url).href, title: "Design", items: ["Figma", "Illustrator", "Photoshop"] },
  { icon: new URL("../assets/icons/icon-accessibility.svg", import.meta.url).href, title: "Accessibility", items: ["508 Compliance", "QA Testing", "SCORM"] },
  { icon: new URL("../assets/icons/icon-other.svg", import.meta.url).href, title: "Development Tools", items: ["Acrobat", "LMS", "MS Office", "QA Testing", "Technical Support", "Version Control"] }
];
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-column {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 420ms ease, transform 420ms ease;
}

.skill-column:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.skill-column.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-column:nth-child(3n+1).is-visible { transition-delay: 0ms; }
.skill-column:nth-child(3n+2).is-visible { transition-delay: 100ms; }
.skill-column:nth-child(3n+3).is-visible { transition-delay: 200ms; }

.skill-header {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  background: linear-gradient(180deg, #101719, #202E32);
  padding: 0.75rem;
  gap: 0.75rem;
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
  min-width: 0;
  overflow-wrap: anywhere; 
}

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

@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  
  /* 2-column layout stagger */
  .skill-column:nth-child(2n+1).is-visible { transition-delay: 0ms; }
  .skill-column:nth-child(2n+2).is-visible { transition-delay: 100ms; }
}

/* Fade-in helper (opacity + transform) */
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
  .skill-column,
  .skill-column.is-visible {
    transition: none;
    transform: none;
  }
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  
  /* Single column - no stagger needed */
  .skill-column.is-visible { transition-delay: 0ms; }
}
</style>