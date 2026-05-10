import { Link } from "react-router-dom";

export default function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          to="/memberships"
          className="flex-1 rounded-2xl border border-lime/40 py-3 text-center text-xs font-bold uppercase tracking-wider text-lime"
        >
          Plans
        </Link>
        <Link
          to="/contact"
          className="flex-[1.2] rounded-2xl bg-lime py-3 text-center text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_24px_-4px_rgba(196,245,66,0.55)]"
        >
          Free trial
        </Link>
      </div>
    </div>
  );
}
