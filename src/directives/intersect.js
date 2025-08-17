export default {
  beforeMount(el, binding) {
    const opts = Object.assign(
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08, once: true },
      binding.value || {}
    );

    // support duration/easing passed via binding
    if (binding.value && binding.value.duration) {
      el.style.setProperty('--fade-duration', binding.value.duration);
    }
    if (binding.value && binding.value.easing) {
      el.style.setProperty('--fade-easing', binding.value.easing);
    }

    const onIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (opts.once) observer.unobserve(entry.target);
        } else {
          if (!opts.once) el.classList.remove('is-visible');
        }
      });
    };

    const io = new IntersectionObserver(onIntersect, {
      root: opts.root,
      rootMargin: opts.rootMargin,
      threshold: opts.threshold
    });
    el.__io = io;
    io.observe(el);
  },
  unmounted(el) {
    if (el.__io) {
      el.__io.disconnect();
      delete el.__io;
    }
  }
};
