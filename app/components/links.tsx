import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function links() {
  return (
    <div className="w-48 bg-white border border-blue-600 p-2 shadow-md">
      <div className="bg-blue-600 p-1 mb-2">
        <Image src="/assets/jesal-website-duck.gif" alt="Duck" width={176} height={50} unoptimized className="mx-auto" />
      </div>
      <div className="flex flex-col space-y-2">
        <a
          href="https://github.com/jes4l"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1 bg-blue-500 text-white rounded hover:bg-blue-400 active:shadow-lg transition-shadow flex items-center justify-center"
        >
          <FaGithub size={20} className="mr-1" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jesal-vadgama-a78469116/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1 bg-blue-500 text-white rounded hover:bg-blue-400 active:shadow-lg transition-shadow flex items-center justify-center"
        >
          <FaLinkedin size={20} className="mr-1" /> LinkedIn
        </a>
      </div>
    </div>
  );
}