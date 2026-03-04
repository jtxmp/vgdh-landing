import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-700 tracking-tight md:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="font-[family-name:var(--font-ibm-plex)] text-4xl font-700 text-verse-blue/30">
                {step.number}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-lg font-700">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-verse-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
