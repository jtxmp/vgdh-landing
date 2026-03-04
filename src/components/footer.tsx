import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-verse-400/30 px-6 py-10">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-4 text-center">
        <Image
          src="/images/vgdh_logo_new.png"
          alt="VGDH logo"
          width={640}
          height={160}
          className="h-8 w-auto"
        />
        <p className="text-xs text-verse-200">
          Verse Global Dev House &middot; v0.1.0
        </p>
        <p className="text-xs text-verse-400">
          &copy; {new Date().getFullYear()} Verse Global Dev House. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
