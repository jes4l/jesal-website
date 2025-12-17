import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function ProjectorTshirtMachine() {
  return (
    <a
      href="https://github.com/jes4l/projector-t-shirt-machine"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="w-76 border-2 border-[#304269] bg-[#A7C7E7] shadow-[6px_6px_0px_#304269] hover:shadow-[3px_3px_0px_#304269] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200">
        <div className="bg-[#304269] px-3 py-2 flex justify-between items-center text-[#A7C7E7]">
          <span className="font-mono text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
            Projector Tshirt Machine
          </span>

          <div className="flex items-center gap-1 group-hover:text-white transition-colors">
            <span className="text-sm emoji-animate">🎨</span>
            <FaGithub className="w-4 h-4" />
          </div>
        </div>

        <div className="relative w-full h-32 border-b-2 border-[#304269] overflow-hidden">
          <Image
            src="/assets/projectortshirtmachine.jpg"
            alt="Projector Tshirt Machine"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-3 bg-white/50 h-28 flex flex-col">
          <p className="text-[#304269] text-xs font-bold font-mono uppercase tracking-wide mb-1">
            2nd Overall at Durhack 24!
          </p>
          <p className="text-[#304269] text-xs font-sans leading-snug line-clamp-4">
            Turns your t-shirt into a canvas, letting you paint your designs on a virtual board, and projecting it onto your top, maintaining dynamic scaling via projector or laptop.
          </p>
        </div>
      </div>
    </a>
  );
}