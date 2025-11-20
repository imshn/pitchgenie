export function SiteFooter() {
  return (
    <footer className="text-sm text-zinc-500">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} PitchGenie. All rights reserved.</p>

        <div className="flex gap-6">
          <a className="hover:text-zinc-300">Privacy</a>
          <a className="hover:text-zinc-300">Terms</a>
          <a className="hover:text-zinc-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}