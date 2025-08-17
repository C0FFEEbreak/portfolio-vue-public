<template>
  <footer id="footer" class="site-footer" role="contentinfo" aria-label="Footer">
    <div class="section-inner footer-inner">
      <div class="footer-line">
        <span>©{{ year }}</span>
        <a
          :href="mailtoLink"
          class="footer-name"
          :aria-label="`Email ${emailUser}@${emailDomain}`"
        >
          {{ displayName }}
        </a>
        <span> All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// ========================
const emailUser = 'youremail'      // before the @
const emailDomain = 'example.com'  // domain
const displayName = 'Stacey Trent Donica.'       // visible name in footer
// ========================

const year = new Date().getFullYear()

const mailtoLink = computed(() => {
  const addr = `${emailUser}@${emailDomain}`
  // no subject/body prefill here — simple direct mailto
  return `mailto:${addr}`
})
</script>

<style scoped>
.site-footer {
  color: #C5C6BF;
  font-size: 0.9rem;
}

/* inner container */
.footer-inner {
  display: flex;
  justify-content: center;
  padding: 1rem 0; /* vertical spacing — horizontal padding comes from .section-inner */
}

/* single-line layout */
.footer-line {
  display: inline-flex;
  gap: 0.35rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: inherit;
}

.footer-name {
  color: #9FC2D0;
  text-decoration: none;
  padding: 2px 4px;
  border-radius: 4px;
  transition: color 150ms ease, background-color 150ms ease;
}

.footer-name:hover,
.footer-name:focus {
  color: #C5E9F2;
  background-color: rgba(159,194,208,0.06);
  outline: none;
  box-shadow: 0 0 0 3px rgba(159,194,208,0.08);
}

.footer-name:focus {
  border-radius: 4px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
</style>