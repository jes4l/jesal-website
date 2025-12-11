export default function Header() {
  return (
    <div className="w-full bg-[#A7C7E7] border border-[#304269] p-2 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-2 bg-[#304269] text-white p-1 text-center rounded-md overflow-hidden">
        <span className="inline-block animate-marquee whitespace-nowrap">
          Jesal Vadgama's Website &nbsp; Jesal Vadgama's Website &nbsp; Jesal Vadgama's Website &nbsp;
        </span>
      </h1>
      <p className="text-lg mb-2">
        Website under Construction
      </p>
      <ul className="list-disc pl-4 text-lg">
        <li>Wait a min</li>
      </ul>
    </div>
  );
}