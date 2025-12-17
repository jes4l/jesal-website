import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function GeneticTurtle() {
  return (
    <a
      href="https://github.com/jes4l/genetic-turtle-sim"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="w-76 border-2 border-[#304269] bg-[#A7C7E7] shadow-[6px_6px_0px_#304269] hover:shadow-[3px_3px_0px_#304269] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200">
        <div className="bg-[#304269] px-3 py-2 flex justify-between items-center text-[#A7C7E7]">
          <span className="font-mono text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
            Genetic Turtle Simulation
          </span>

          <div className="flex items-center gap-1 group-hover:text-white transition-colors">
            <span className="text-sm emoji-animate">🐢</span>
            <FaGithub className="w-4 h-4" />
          </div>
        </div>

        <div className="relative w-full h-32 border-b-2 border-[#304269] overflow-hidden">
          <Image
            src="/assets/geneticturtle.png"
            alt="Genetic Turtle"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-3 bg-white/50 h-28 flex flex-col">
          <p className="text-[#304269] text-xs font-bold font-mono uppercase tracking-wide mb-1">
            Intelligent agent simulation
          </p>
          <p className="text-[#304269] text-xs font-sans leading-snug line-clamp-4">
            Intelligent agent simulation focusing on the evolution of turtle hatchlings to minimise mortality rate using the Tkinter library. Uses genetic algorithms to identify the optimal traits for survival.
          </p>
        </div>
      </div>
    </a>
  );
}