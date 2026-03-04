import { STATS } from "@/lib/constants";

export default function ProofStrip() {
  return (
    <section className="border-y border-verse-400/30 bg-verse-800 px-6 py-12">
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-[family-name:var(--font-ibm-plex)] text-3xl font-700 text-verse-blue md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-verse-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
