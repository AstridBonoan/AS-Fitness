import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Memberships from "./pages/Memberships.jsx";
import Trainers from "./pages/Trainers.jsx";
import Classes from "./pages/Classes.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
