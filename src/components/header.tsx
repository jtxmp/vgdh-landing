import Image from "next/image";
import { TELEGRAM_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-verse-600 bg-verse-1000/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-3">
        <a
          href="https://verse.bitcoin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/verse_light_h68.png"
            alt="Verse"
            width={120}
            height={34}
            className="h-[34px] w-auto"
          />
          <span className="hidden font-[family-name:var(--font-barlow)] text-sm font-700 tracking-wide text-verse-200 sm:inline">
            Global Dev House
          </span>
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-verse-blue px-5 py-2 font-[family-name:var(--font-barlow)] text-sm font-700 text-white transition-opacity hover:opacity-90"
        >
          Join Community
        </a>
      </div>
    </header>
  );
}
