import Image from "next/image";
import { VERTICALS } from "@/lib/constants";

export default function VerticalsGrid() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-700 tracking-tight md:text-4xl">
          Six verticals. One mission.
        </h2>
        <p className="mt-3 max-w-lg text-verse-200">
          Every app we ship serves crypto adoption from a different angle.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v) => (
            <div
              key={v.name}
              className="rounded-xl border border-verse-400/20 bg-verse-800 p-6 transition-colors hover:border-verse-400/40"
            >
              <Image src={v.icon} alt={v.name} width={48} height={48} className="h-12 w-12 rounded-lg" />
              <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-lg font-700">
                {v.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-verse-200">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
