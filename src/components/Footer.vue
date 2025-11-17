<template>
  <footer id="footer" class="site-footer" aria-label="Footer">
    <div class="section-inner footer-inner">
      <address class="footer-line">
        <span aria-hidden="true">© {{ year }}</span>
        <span class="footer-name">{{ displayName }}</span>
        <span aria-hidden="true">All Rights Reserved.</span>
      </address>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const displayName = 'Stacey Trent Donica'
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

.footer-name:focus {
  color: #C5E9F2;
  background-color: rgba(159,194,208,0.06);
  outline: none;
  box-shadow: 0 0 0 3px rgba(159,194,208,0.08);
}

</style>
