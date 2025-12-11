import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import Image from 'next/image';

export default function Links({ className = '' }: { className?: string }) {
  return (
    <div className={`w-48 bg-[#A7C7E7] border border-[#304269] p-2 shadow-lg rounded-lg ${className}`}>
      <div className="bg-[#304269] p-1 mb-2 rounded-md">
        <Image src="/assets/jesal-website-duck.gif" alt="Duck" width={176} height={50} unoptimized className="mx-auto" />
      </div>
      <div className="flex flex-col space-y-2">
        <a
          href="https://github.com/jes4l"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1 bg-[#86ABD4] text-white rounded-md hover:bg-[#304269] active:shadow-lg transition-shadow flex items-center justify-center"
        >
          <FaGithub size={20} className="mr-1" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jesal-vadgama-a78469116/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1 bg-[#86ABD4] text-white rounded-md hover:bg-[#304269] active:shadow-lg transition-shadow flex items-center justify-center"
        >
          <FaLinkedin size={20} className="mr-1" /> LinkedIn
        </a>
        <a
          href="https://devpost.com/jes4l"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1 bg-[#86ABD4] text-white rounded-md hover:bg-[#304269] active:shadow-lg transition-shadow flex items-center justify-center"
        >
          <FaCode size={20} className="mr-1" /> Devpost
        </a>
      </div>
    </div>
  );
}