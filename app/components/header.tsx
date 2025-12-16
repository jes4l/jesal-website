'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [marqueeContent, setMarqueeContent] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const text = "Jesal's Website ";
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
    <div className="w-full bg-[#A7C7E7] border-2 border-[#304269] p-4 shadow-lg rounded-none crt-screen">
      <div ref={containerRef} className="bg-[#304269] text-white -mx-4 -mt-4 px-4 py-2 mb-4 flex items-center justify-between font-bold text-base">
        <div className="flex-1 overflow-hidden">
          <span className="inline-block animate-marquee whitespace-nowrap text-3xl crt-text-glow">
            {marqueeContent}
          </span>
        </div>
      </div>
      <span ref={textRef} className="absolute left-[-9999px] text-3xl whitespace-nowrap">
        {text}
      </span>
      <div className="text-base font-mono -mt-2 crt-text-glow">
        <nav className="flex space-x-4">
          <Link href="/" className="text-[#304269] hover:underline font-bold">Home</Link>
          <Link href="/projects" className="text-[#304269] hover:underline font-bold">Projects</Link>
        </nav>
      </div>
    </div>
  );
}