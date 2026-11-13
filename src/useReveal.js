import { useEffect, useRef } from 'react';

// O conteúdo permanece visível mesmo se as animações não forem suportadas.
export default function useReveal(filter) {
  const revealed = useRef(new WeakSet());
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (revealed.current.has(target)) return;
        revealed.current.add(target);
        if (preference.matches || target.contains(document.activeElement)) return;
        const index = [...target.parentElement.children].indexOf(target);
        const animation = target.animate([
          { opacity: 0, translate: '0 24px' },
          { opacity: 1, translate: '0 0' },
        ], { duration: 650, delay: Math.min(index, 4) * 65, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-index, .about-grid > div, .mascot-visual, .mascot-copy, .section-heading > *, .proposal-card, .team-layout > div:first-child, .members article, .contact-inner').forEach(el => observer.observe(el));
    const stop = () => { if (preference.matches) animations.forEach(a => a.cancel()); };
    const showFocused = () => animations.forEach(a => { if (a.effect.target.contains(document.activeElement)) a.cancel(); });
    preference.addEventListener('change', stop);
    document.addEventListener('focusin', showFocused);
    return () => {
      observer.disconnect();
      animations.forEach(a => a.cancel());
      preference.removeEventListener('change', stop);
      document.removeEventListener('focusin', showFocused);
    };
  }, [filter]);
}
