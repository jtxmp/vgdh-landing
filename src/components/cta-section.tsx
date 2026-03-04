import { TELEGRAM_URL } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1080px] text-center">
        <h2 className="font-[family-name:var(--font-barlow)] text-3xl font-700 tracking-tight md:text-4xl">
          Ready to build?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-verse-200">
          Join the Telegram, pick a role, and start shipping with the community.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-verse-blue px-8 py-3.5 font-[family-name:var(--font-barlow)] text-base font-700 text-white transition-opacity hover:opacity-90"
        >
          Join the Community
        </a>
      </div>
    </section>
  );
}
