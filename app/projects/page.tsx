'use client';
import Header from '../components/header';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#b8c9d9] text-[#304269] flex flex-row justify-center p-4 space-x-4">
      <main className="flex flex-col gap-4 border-2 border-[#304269] p-4 bg-[#A7C7E7] rounded-none shadow-[8px_8px_0px_rgba(48,66,105,1)] w-5xl z-20 relative">
        <Header />
      </main>
      <aside className="flex flex-col space-y-4"></aside>
    </div>
  );
}