import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import Image from 'next/image';

export default function Links({ className = '', dragListeners = {} }: { className?: string; dragListeners?: any }) {
  return (
    <div className={`w-48 bg-[#A7C7E7] border-2 border-[#304269] p-4 shadow-lg rounded-none crt-screen ${className}`}>
      <div 
        className="bg-[#304269] text-white -mx-4 -mt-4 px-4 py-1 mb-4 flex items-center justify-between font-bold text-base cursor-grab"
        {...dragListeners}
      >
        {}
        <span className="crt-text-glow">Links</span>
      </div>
      <div className="mb-2 -mt-2">
        <Image src="/assets/jesal-website-duck.gif" alt="Duck" width={160} height={50} unoptimized className="mx-auto" />
      </div>
      {}
      <div className="flex flex-col space-y-2 font-mono text-base -mt-2 crt-text-glow">
        <a
          href="https://github.com/jes4l"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#304269] hover:underline flex items-center"
        >
          <FaGithub size={16} className="mr-2" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jesal-vadgama-a78469116/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#304269] hover:underline flex items-center"
        >
          <FaLinkedin size={16} className="mr-2" /> LinkedIn
        </a>
        <a
          href="https://devpost.com/jes4l"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#304269] hover:underline flex items-center"
        >
          <FaCode size={16} className="mr-2" /> Devpost
        </a>
      </div>
    </div>
  );
}