'use client';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [marqueeContent, setMarqueeContent] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const text = "Jesal's Website  Is Under Construction ";

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.offsetWidth;
      if (textWidth > 0 && containerWidth > 0) {
        const repeats = Math.ceil(containerWidth / textWidth) + 1;
        const unit = text.repeat(repeats);
        setMarqueeContent(unit + unit);
      }
    }
  }, []);

  return (
    <div className="w-full bg-[#A7C7E7] border-2 border-[#304269] p-4 shadow-lg rounded-none">
      <div ref={containerRef} className="bg-[#304269] text-white -mx-4 -mt-4 px-4 py-2 mb-4 flex items-center justify-between font-bold text-base">
        <div className="flex-1 overflow-hidden">
          <span className="inline-block animate-marquee whitespace-nowrap text-3xl">
            {marqueeContent}
          </span>
        </div>
      </div>
      <span ref={textRef} className="absolute left-[-9999px] text-3xl whitespace-nowrap">
        {text}
      </span>
      <p className="text-base font-mono mb-2 -mt-2">
        Website under Construction
      </p>
      <ul className="list-disc pl-4 text-base font-mono -mt-2">
        <li>Wait a min</li>
      </ul>
    </div>
  );
}