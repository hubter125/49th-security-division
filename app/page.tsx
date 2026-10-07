import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Accomplishments from "@/components/Accomplishments";
import TrainingTracks from "@/components/TrainingTracks";
import ComingSoon from "@/components/ComingSoon";
import Officers from "@/components/Officers";
import Sponsors from "@/components/Sponsors";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

/**
 * Page flow is a sponsor funnel: credibility (results, programs, leadership) builds toward
 * the partnership ask, with "Partner With Us" CTAs in the navbar, hero, and mid-page.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-niner focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Accomplishments />
        <TrainingTracks />
        <ComingSoon />
        <Officers />
        <Sponsors />
        <Donate />
      </main>
      <Footer />
    </>
  );
}