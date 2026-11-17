import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero, Marquee } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { AiAddons } from "@/components/site/AiAddons";
import { Pricing } from "@/components/site/Pricing";
import { Offer } from "@/components/site/Offer";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Interactions } from "@/components/site/Interactions";
import { Intro } from "@/components/site/Intro";
import { Dock } from "@/components/site/Dock";

const TITLE = "Alphex Studio — Turn clicks into clients";
const DESCRIPTION =
  "Alphex Studio designs and builds fast, modern, conversion-focused websites for startups, local businesses and growing brands in India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Intro />
      <Interactions />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Work />
        <Process />
        <AiAddons />
        <Pricing />
        <Offer />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </div>
  );
}
