<template>
  <footer id="footer" class="site-footer" aria-label="Footer">
    <div class="section-inner footer-inner">
      <address class="footer-line">
        <span aria-hidden="true">©{{ year }}</span>

        <!-- semantic address + accessible link -->
        <a
          :href="mailtoLink"
          class="footer-name"
          :aria-label="`Email ${displayName}`"
        >
          {{ displayName }}
        </a>

        <span aria-hidden="true">All Rights Reserved.</span>
      </address>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// ====== CONFIG ============================================
const emailUser = 'youremail'      // before the @ — consider using import.meta.env for production
const emailDomain = 'example.com'  // domain
const displayName = 'Stacey Trent Donica' // visible name in footer (trim trailing punctuation)
// ===========================================================

const year = new Date().getFullYear()

const mailtoLink = computed(() => {
  const addr = `${emailUser}@${emailDomain}`
  // If you want a prefilled subject/body:
  // const subject = encodeURIComponent('Hello');
  // return `mailto:${addr}?subject=${subject}`
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
  padding: 1rem 0;
}

.footer-line {
  display: inline-flex;
  gap: 0.35rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: inherit;
  text-decoration: none;
  line-height: 1.25;
}

/* link */
.footer-name {
  color: #9FC2D0;
  text-decoration: none;
  padding: 2px 4px;
  border-radius: 4px;
  transition: color 150ms ease, background-color 150ms ease, box-shadow 150ms ease;
}

.footer-name:hover,
.footer-name:focus {
  color: #C5E9F2;
  background-color: rgba(159,194,208,0.06);
  outline: none;
  box-shadow: 0 0 0 3px rgba(159,194,208,0.08);
}

</style>
