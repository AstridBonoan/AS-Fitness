import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/memberships", label: "Memberships" },
  { to: "/trainers", label: "Trainers" },
  { to: "/classes", label: "Classes" },
  { to: "/contact", label: "Contact" },
];

function linkClass({ isActive }) {
  return `relative px-1 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
    isActive ? "text-lime" : "text-white/55 hover:text-white"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime/40 bg-lime/10 font-display text-xl text-lime transition group-hover:bg-lime group-hover:text-ink">
            AS
          </span>
          <span className="font-display text-2xl tracking-[0.12em] text-white sm:text-3xl">
            FITNESS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-lime px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-lime-glow"
          >
            Book a tour
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-lime transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-lime transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/5 bg-ink md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                  isActive ? "bg-lime/10 text-lime" : "text-white/70"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-lime py-3 text-sm font-bold uppercase tracking-wider text-ink"
          >
            Book a tour
          </Link>
        </nav>
      </div>
    </header>
  );
}
