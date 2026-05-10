import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-ink-muted pb-28 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl tracking-wide text-white">
            AS <span className="text-lime">FITNESS</span>
          </p>
          <p className="mt-4 max-w-md text-sm text-white/55">
            A modern training floor built for speed, strength, and community. Train bold. Recover smarter.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <Link className="hover:text-white" to="/memberships">
                Memberships
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/classes">
                Schedule
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/trainers">
                Coaches
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Visit</p>
          <p className="mt-4 text-sm text-white/60">
            428 Harbor Line
            <br />
            Downtown District
            <br />
            Open 5am — 11pm
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} AS Fitness. All rights reserved.
      </div>
    </footer>
  );
}
