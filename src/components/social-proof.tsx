import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="border-y border-verse-400/30 bg-verse-800 px-6 py-16">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-10">
        <p className="text-sm font-500 uppercase tracking-widest text-verse-200">
          Backed by
        </p>
        <div className="flex items-center gap-12">
          <Image
            src="/images/bcom_light_x320.png"
            alt="Bitcoin.com"
            width={320}
            height={68}
            className="h-8 w-auto opacity-80 md:h-10"
          />
          <Image
            src="/images/verse_light_h68.png"
            alt="Verse"
            width={200}
            height={68}
            className="h-8 w-auto opacity-80 md:h-10"
          />
        </div>
      </div>
    </section>
  );
}
