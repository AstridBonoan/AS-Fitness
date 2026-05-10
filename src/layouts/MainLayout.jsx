import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import MobileBottomCTA from "../components/MobileBottomCTA.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-ink">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}
