export default function Footer() {
  return (
    <footer className="border-t border-verse-400/30 px-6 py-10">
      <div className="mx-auto max-w-[1080px] text-center">
        <p className="text-xs text-verse-400">
          &copy; {new Date().getFullYear()} Bitcoin.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
