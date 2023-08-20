
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center justify-between p-24">
      <section>
        <div>
          <span className="w-1/3 m-auto  text-black text-6xl font-bold  transition-opacity duration-1000 ease-in opacity-100 ">
            <span className="text-6xl font-extralight transition ease-in duration-1000 delay-1000">Trip</span>
            <span className="text-6xl font-bold">GO</span>
          </span>
        </div>
      </section>
    </main>
  );
}
