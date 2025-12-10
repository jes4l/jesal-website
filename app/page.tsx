import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-8">
        <p className="text-lg mb-4">
          Helloworld!
        </p>
        <ul className="list-disc pl-5">
          <li>hehe</li>
        </ul>
      </main>
    </div>
  );
}