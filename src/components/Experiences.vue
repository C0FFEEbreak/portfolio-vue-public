<template>
  <section class="experiences" id="experiences">
    <!-- Title -->
    <h1 class="section-title">Experiences</h1>
    <hr />

    <!-- Content -->
    <div class="experiences-content">
      
      <!-- Column 1: Experience square -->
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

      <!-- Column 2: Accordion -->
      <div class="experiences-accordion">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="accordion-item"
        >
          <button
            class="accordion-header"
            :aria-expanded="activeIndex === index ? 'true' : 'false'"
            :aria-controls="'panel-' + index"
            @click="toggleAccordion(index)"
            :id="'accordion-header-' + index"
          >
            <span>{{ experience.category }}</span>
            <span class="accordion-arrow" aria-hidden="true">
              <!-- Down arrow (active) -->
              <svg
                v-if="activeIndex === index"
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                width="40px"
                viewBox="0 -960 960 960"
                fill="#e3e3e3"
              >
                <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
              </svg>
              <!-- Left arrow (inactive) -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                width="40px"
                viewBox="0 -960 960 960"
                fill="#e3e3e3"
              >
                <path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z" />
              </svg>
            </span>
          </button>

          <div
            v-show="activeIndex === index"
            class="accordion-content"
            :id="'panel-' + index"
            role="region"
            :aria-labelledby="'accordion-header-' + index"
          >
            <p>{{ experience.description }}</p>
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
.experiences {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.experiences-content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Left column: experience square */
.experience-square {
  background-color: #3A4B55;
  color: #fff;
  width: clamp(200px, 80%, 300px);
  height: clamp(150px, 60vw, 150px);
  margin: 0 auto;
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

/* Right column: accordion */
.experiences-accordion {
  background: #3A4B55;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
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

.accordion-arrow svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.accordion-content {
  padding: 0 0 1rem 0;
  color: #e3e3e3;
}

/* Layout behavior */
.experience-square,
.experiences-accordion {
  flex: 1 1 50%;
}

/* Mobile layout */
@media (max-width: 768px) {
  .experiences-content {
    flex-direction: column;
    align-items: stretch;
  }
  .experience-square {
    max-width: 90%;
    height: auto;
  }
  .experience-square,
  .experiences-accordion {
    flex: none;
    width: 100%;
  }
}
</style>
