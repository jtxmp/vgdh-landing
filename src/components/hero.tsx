import Image from "next/image";
import { TELEGRAM_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-12 px-6 md:flex-row md:items-start md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-barlow)] text-4xl font-800 leading-tight tracking-tight md:text-5xl lg:text-6xl">
            70+ apps shipped by the community, for the community.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-verse-200">
            Verse Global Dev House builds crypto apps across education,
            security, games, DeFi, and more. Pick a role. Join a team. Ship
            something real.
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
        <div className="w-full max-w-xs flex-shrink-0 md:max-w-sm">
          <Image
            src="/images/hero_community.png"
            alt="Verse Global Dev House community"
            width={640}
            height={640}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
