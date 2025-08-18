// src/directives/intersect.js (shared-observer version)
const observers = new Map(); // key -> { io, count }

function optsKey(opts) {
  return JSON.stringify([opts.root, opts.rootMargin, opts.threshold, opts.once]);
}

export default {
  mounted(el, binding) {
    const userOpts = binding.value && typeof binding.value === 'object' ? binding.value : {};
    const opts = Object.assign(
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08, once: true },
      userOpts
    );

    if (userOpts.duration) el.style.setProperty('--fade-duration', userOpts.duration);
    if (userOpts.easing) el.style.setProperty('--fade-easing', userOpts.easing);

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      el.__ioKey = null;
      return;
    }

    const key = optsKey(opts);

    if (!observers.has(key)) {
      const handlers = new Map(); // element -> opts.once
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const target = entry.target;
          const once = handlers.get(target) && handlers.get(target).once;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            if (once) observer.unobserve(target);
          } else {
            if (!once) target.classList.remove('is-visible');
          }
        });
      }, { root: opts.root, rootMargin: opts.rootMargin, threshold: opts.threshold });

      observers.set(key, { io, handlers, count: 0 });
    }

    const record = observers.get(key);
    record.handlers.set(el, { once: !!opts.once });
    record.count += 1;
    el.__ioKey = key;
    record.io.observe(el);
  },

  unmounted(el) {
    const key = el.__ioKey;
    if (!key) return;
    const record = observers.get(key);
    if (!record) return;

    try {
      record.io.unobserve(el);
    } catch (e) { /* ignore */ }

    record.handlers.delete(el);
    record.count -= 1;

    if (record.count <= 0) {
      try { record.io.disconnect(); } catch (e) {}
      observers.delete(key);
    }

    delete el.__ioKey;
  }
};
