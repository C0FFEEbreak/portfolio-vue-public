<template>
  <section class="experiences" id="experiences">
    <!-- Title with circles wrapper -->
    <div v-intersect class="title-with-circles">
      <div class="title-circles">
        <div class="circle-yellow"></div>
        <div class="circle-blue"></div>
      </div>
      <h1 class="section-title">Experiences</h1>
    </div>
    
    <!-- HR line animation -->
    <hr v-intersect />
    
    <!-- Content fade-in -->
    <div v-intersect="{ duration: '300ms' }" class="fade-in-section">
      <div class="experiences-content">
        <!-- Left Column -->
        <div class="experience-square">
          <div class="experience-inner">
            <div class="experience-icon">
              <img src="@/assets/icons/icon-briefcase.svg" alt="Briefcase Icon" />
            </div>
            <div class="experience-text">
              <div class="experience-number">20+</div>
              <div class="experience-label">Years of Experience</div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="experiences-accordion">
          <div v-for="(experience, index) in experiences" :key="index" class="accordion-item">
            <button class="accordion-header" :aria-expanded="activeIndex === index ? 'true' : 'false'"
              :aria-controls="'panel-' + index" @click="toggleAccordion(index)" :id="'accordion-header-' + index">
              <span>{{ experience.category }}</span>
              <span class="accordion-arrow" aria-hidden="true">
                <svg v-if="activeIndex === index" xmlns="http://www.w3.org/2000/svg" height="20" width="20"
                  fill="#e3e3e3" viewBox="0 -960 960 960">
                  <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#e3e3e3"
                  viewBox="0 -960 960 960">
                  <path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z" />
                </svg>
              </span>
            </button>
            <div :class="['accordion-content', { open: activeIndex === index }]" :id="'panel-' + index" role="region"
              :aria-labelledby="'accordion-header-' + index">
              <p>{{ experience.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import experiences from '@/data/experiences.js'

const activeIndex = ref(null)

function toggleAccordion(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.experiences-content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.experience-square {
  background-color: #3A4B55;
  color: #fff;
  width: 40%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.experience-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.experience-icon img {
  width: 48px;
  height: 48px;
  background: #101519;
  padding: 12px;
}

.experience-text {
  display: flex;
  flex-direction: column;
}

.experience-number {
  font-size: 2rem;
  font-weight: bold;
}

.experience-label {
  font-size: 1rem;
  color: #c5c6bf;
}

.experiences-accordion {
  background: #3A4B55;
  padding: 20px;
  flex: 1;
  box-sizing: border-box;
  margin: 12px;
}

.accordion-item {
  border-bottom: 1px solid #C5C6BF;
}

.accordion-header {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  cursor: pointer;
  color: #fff;
}

.accordion-header {
  cursor: pointer;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  color: #fff;
  transition: background 0.2s ease, color 0.2s ease;
}

.accordion-header:hover {
  color: #FFD77A;
  background: rgba(255, 255, 255, 0.08);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
  opacity: 0;
  transition: max-height 0.35s ease, padding 0.35s ease, opacity 0.35s ease;
}

.accordion-content.open {
  max-height: 500px;
  padding: 0.5rem 20px;
  opacity: 1;
}

.accordion-content p {
  padding: 0 20px;
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
  .experiences-content {
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem;
  }

  .experience-square,
  .experiences-accordion {
    width: 100%;
  }

  .experience-inner img {
    width: 40px;
    padding: 6px;
  }

  .experience-square {
    max-width: 380px;
    max-height: 100px;
  }

  .accordion-header {
    font-size: 14px;
    text-align: left;
  }
}

@media (max-width: 420px) {
  .experiences-accordion {
    padding: 8px;
    margin: 0;
  }
  .experience-square {
    max-width: 250px;
  }
  .accordion-content p {
    margin: 0;
    padding: 0 4px 8px 0;
  }
}
</style>