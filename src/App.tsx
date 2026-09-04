import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { WaterBackground } from "@/components/WaterBackground";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionRail } from "@/components/SectionRail";
import { AmbientAudio } from "@/components/AmbientAudio";
import Home from "@/pages/Home";
import Science from "@/pages/Science";
import Machines from "@/pages/Machines";
import Doctor from "@/pages/Doctor";
import References from "@/pages/References";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import QA from "@/pages/QA";
import Library from "@/pages/Library";
import Business from "@/pages/Business";
import Testimonials from "@/pages/Testimonials";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let target: HTMLElement | null = null;
      try {
        const id = decodeURIComponent(hash.slice(1));
        target = document.getElementById(id) ?? Array.from(document.querySelectorAll<HTMLElement>("[data-section]"))
          .find((element) => element.dataset.section === id) ?? null;
      } catch { /* An invalid fragment should not break page navigation. */ }
      window.scrollTo({ top: target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - 100) : 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function LegacySolutionRedirect() {
  const { pathname, search, hash } = useLocation();
  return <Navigate to={{ pathname: "/solution", search, hash: hash || (pathname === "/competition" ? "#verification" : "") }} replace />;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <WaterBackground />

      <ScrollProgress />
      <SectionRail />
      <Nav />
      <ScrollToTop />
      <main id="main-content" className="relative z-[1]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/solution" element={<Machines />} />
          <Route path="/machines" element={<LegacySolutionRedirect />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/competition" element={<LegacySolutionRedirect />} />
          <Route path="/references" element={<References />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/ask-defazio" element={<Navigate to="/qa" replace />} />
          <Route path="/library" element={<Library />} />
          <Route path="/business" element={<Business />} />
          <Route path="/stories" element={<Testimonials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
      <AmbientAudio />
    </>
  );
}
