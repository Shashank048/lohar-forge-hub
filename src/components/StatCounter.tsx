import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-accent md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
