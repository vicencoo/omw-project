import { useEffect, useRef, useState } from 'react';

// Splits a stat like "50K+", "99.8%" or "200M+" into prefix / number / suffix.
// Values without a plain leading number (e.g. "24/7") are shown as-is.
const parse = (value) => {
  const str = String(value);
  if (/^\d+\/\d+$/.test(str)) return null;
  const match = str.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes('.') ? num.split('.')[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
};

const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

// Counts from 0 up to the number in `value` the first time it scrolls into view.
export const CountUp = ({ value, duration = 1800 }) => {
  const ref = useRef(null);
  const parsed = parse(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element || !parsed) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduceMotion) {
      setCurrent(parsed.target);
      return;
    }

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(element);

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCurrent(parsed.target * easeOutCubic(progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!parsed) return <span>{value}</span>;

  return (
    <span ref={ref} aria-label={String(value)} className='tabular-nums'>
      {parsed.prefix}
      {current.toFixed(parsed.decimals)}
      {parsed.suffix}
    </span>
  );
};
