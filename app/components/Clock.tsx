'use client';
import { useState, useEffect } from 'react';
export default function clock({ className }: { className?: string }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;
  return (
    <svg className={className || "w-12 h-12"} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" stroke="#171717" strokeWidth="4" fill="none" />
      <line
        x1="50" y1="50" x2="50" y2="10"
        stroke="#171717" strokeWidth="4" strokeLinecap="round"
        transform={`rotate(${hourDeg} 50 50)`}
      />
      <line
        x1="50" y1="50" x2="50" y2="5"
        stroke="#171717" strokeWidth="3" strokeLinecap="round"
        transform={`rotate(${minuteDeg} 50 50)`}
      />
      <line
        x1="50" y1="50" x2="50" y2="0"
        stroke="red" strokeWidth="2" strokeLinecap="round"
        transform={`rotate(${secondDeg} 50 50)`}
      />
      <circle cx="50" cy="50" r="3" fill="#171717" />
    </svg>
  );
}