'use client';
import Links from './components/links';
import Header from './components/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-row justify-center p-4 space-x-4">
      <main className="flex flex-row space-x-4 border border-blue-600 p-4 bg-blue-100 rounded-md shadow-md">
        <aside className="flex flex-col space-y-4">
          <Links />
        </aside>
        <div className="flex flex-col space-y-4">
          <Header />
        </div>
      </main>
      <aside className="flex flex-col space-y-4">
        {}
      </aside>
    </div>
  );
}