'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Clock from './components/Clock';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <nav className="bg-cyan-950 p-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <button
            className="w-12 h-12 bg-white text-cyan-950 rounded flex items-center justify-center hover:bg-gray-100 active:shadow-lg transition-shadow"
            onClick={() => window.open('https://github.com/jes4l', '_blank')}
          >
            <FaGithub size={24} />
          </button>
          <button
            className="w-12 h-12 bg-white text-cyan-950 rounded flex items-center justify-center hover:bg-gray-100 active:shadow-lg transition-shadow"
            onClick={() => window.open('https://www.linkedin.com/in/jesal-vadgama-a78469116/', '_blank')}
          >
            <FaLinkedin size={24} />
          </button>
        </div>
        <div className="text-white font-bold text-xl">
          Jesal website
        </div>
        <Clock />
      </nav>
      <main className="grow container mx-auto px-4 py-8">
        <p className="text-lg mb-4">
          Website under Construction
        </p>
        <ul className="list-disc pl-5">
          <li>Wait a min</li>
        </ul>
      </main>
    </div>
  );
}