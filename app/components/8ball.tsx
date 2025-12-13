'use client';
import { useEffect, useState } from 'react';
export default function EightBall({ dragListeners = {}, shakeCount = 0, isDragging = false, directionX = 0, directionY = 0 }: { dragListeners?: any; shakeCount?: number; isDragging?: boolean; directionX?: number; directionY?: number }) {
  const [status, setStatus] = useState<'idle' | 'shaking' | 'revealing'>('idle');
  const [answer, setAnswer] = useState('');
  const [shakeStartTime, setShakeStartTime] = useState<number | null>(null);
  const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];
  const getRandomAnswer = () => answers[Math.floor(Math.random() * answers.length)];
  useEffect(() => {
    if (isDragging && shakeCount >= 2 && status === 'idle') {
      setStatus('shaking');
      setShakeStartTime(Date.now());
    }
  }, [shakeCount, isDragging, status]);
  useEffect(() => {
    if (status === 'shaking' && !isDragging && shakeStartTime !== null) {
      const duration = Date.now() - shakeStartTime;
      if (duration >= 1000) {
        setAnswer(getRandomAnswer());
        setStatus('revealing');
      } else {
        setStatus('idle');
      }
      setShakeStartTime(null);
    }
  }, [isDragging, status, shakeStartTime]);
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (status === 'revealing') {
      timer = setTimeout(() => {
        setStatus('idle');
        setAnswer('');
      }, 4000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);
  return (
    <div className="w-48 bg-[#A7C7E7] border-2 border-[#304269] p-4 shadow-lg rounded-none crt-screen">
      <div
        className="bg-[#304269] text-white -mx-4 -mt-4 px-4 py-1 mb-4 flex items-center justify-between font-bold text-base cursor-grab"
        {...dragListeners}
      >
        <span className="crt-text-glow">Shake me</span>
      </div>
      <div className="mt-4">
        {status === 'idle' && (
          <div className="relative w-32 h-32 mx-auto">
            <div className="rounded-full bg-black w-full h-full"></div>
            <div className="absolute top-4 left-8 rounded-full bg-white w-12 h-12 flex items-center justify-center text-black font-bold text-2xl crt-text-glow">
              8
            </div>
          </div>
        )}
        {status === 'shaking' && (
          <div 
            className="relative w-32 h-32 mx-auto" 
            style={{ 
              transform: `translateX(${directionX * 15}px) translateY(${directionY * 15}px) rotate(${directionX * 5}deg)`,
              transition: 'transform 0.05s ease-in-out'
            }}
          >
            <div className="rounded-full bg-black w-full h-full"></div>
            <div className="absolute top-4 left-8 rounded-full bg-white w-12 h-12 flex items-center justify-center text-black font-bold text-2xl crt-text-glow">
              8
            </div>
          </div>
        )}
        {status === 'revealing' && (
          <div className="w-32 h-32 mx-auto bg-black rounded-full flex items-center justify-center text-white text-center p-4 font-mono crt-text-glow text-sm">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}