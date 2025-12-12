export default function AboutMe({ dragListeners = {} }: { dragListeners?: any }) {
  return (
    <div className="w-lg bg-[#A7C7E7] border-2 border-[#304269] p-4 shadow-lg rounded-none">
      <div 
        className="bg-[#304269] text-white -mx-4 -mt-4 px-4 py-1 mb-4 flex items-center justify-between font-bold text-base cursor-grab"
        {...dragListeners}
      >
        <span>About Me</span>
      </div>
      <p className="text-base font-mono -mt-2">
        Five Time Consecutive Hackathon Winner, Integrated Master’s in Computer Science with Artificial Intelligence Graduate at the University of Nottingham with a strong interest in Software Engineering, Computer Vision and A.I. Currently an incoming technology consultant on Solirius Reply’s graduate scheme, and an associate at Hackathons UK.
      </p>
    </div>
  );
}