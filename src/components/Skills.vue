<template>
<section class="skills" id="skills">
  <h1 class="section-title">Skills</h1>

      <div class="skill-column top-left">
        <div class="skill-header">
        <div class="skill-icon">
          <img src="@/assets/icons/icon-web.svg" alt="Web Development" />
        </div>
        <div class="skill-title">Web Development</div>
        </div>
        <div class="skill-list">
          <span class="skill-item">AngularJS</span>
          <span class="skill-item">Bootstrap</span>
          <span class="skill-item">CSS3</span>
          <span class="skill-item">HTML5</span>
          <span class="skill-item">JavaScript</span>
          <span class="skill-item">jQuery</span>
          <span class="skill-item">UI/UX Design</span>
          <span class="skill-item">Vue.js</span>
          <span class="skill-item">WordPress</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-header">
        <div class="skill-icon">
          <img src="@/assets/icons/icon-authoring.svg" alt="Web Development" />
        </div>
        <div class="skill-title">Authoring Tools</div>
        </div>
        <div class="skill-list">
          <span class="skill-item">Articulate Storyline</span>
          <span class="skill-item">Articulate Rise</span>
          <span class="skill-item">Captivate</span>
          <span class="skill-item">Lectora</span>
        </div>
      </div>

      <div class="skill-column top-right">
        <div class="skill-header">
        <div class="skill-icon">
          <img src="@/assets/icons/icon-media.svg" alt="Web Development" />
        </div>
        <div class="skill-title">Media Tools</div>
        </div>
        <div class="skill-list">
          <span class="skill-item">After Effects</span>
          <span class="skill-item">Adobe Animate</span>
          <span class="skill-item">Audacity</span>
          <span class="skill-item">Camtasia</span>
          <span class="skill-item">Premiere Pro</span>
        </div>
      </div>

      <div class="skill-column bottom-left">
        <div class="skill-header">
        <div class="skill-icon">
          <img src="@/assets/icons/icon-deign.svg" alt="Web Development" />
        </div>
        <div class="skill-title">Design</div>
        </div>
        <div class="skill-list">
          <span class="skill-item">Illustrator</span>
          <span class="skill-item">Photoshop</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-header">
        <div class="skill-icon">
          <img src="@/assets/icons/icon-accessibility.svg" alt="Web Development" />
        </div>
        <div class="skill-title">Accessibility</div>
        </div>
        <div class="skill-list">
          <span class="skill-item">508 Compliance</span>
          <span class="skill-item">QA Testing</span>
          <span class="skill-item">SCORM</span>
        </div>
      </div>

      <div class="skill-column bottom-right">
        <div class="skill-header">
        <div class="skill-icon">
          <img src="@/assets/icons/icon-other.svg" alt="Web Development" />
        </div>
        <div class="skill-title">Other</div>
        </div>
        <div class="skill-list">
          <span class="skill-item">Adobe Acrobat</span>
          <span class="skill-item">LMS</span>
          <span class="skill-item">MS Office</span>
          <span class="skill-item">Technical Support</span>
          <span class="skill-item">Version Control</span>
        </div>
      </div>
  </section>
</template>

<script setup>
import skills from "../data/skills.js";
</script>

<style scoped>

.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

.skill-column {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  overflow: hidden; /* ensures the colored top row follows card rounding */
}


/* Top row background */
.skill-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #080B0C;
  padding: 0.75rem;
}

.skill-icon {
  font-size: 2.5rem;
}

.skill-icon img {
  width: 40px;
  height: 40px;
}

.skill-title {
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 0 8px 4px;
  color: #fff;
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
}

/* Responsive */
@media (max-width: 768px) {
	.skills {
		grid-template-columns: 1fr;
	}
	.skill-column {
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
	}
}



</style>
