import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { Services } from "@/components/home/services";
import { Work } from "@/components/home/work";
import { WhyUs } from "@/components/home/why-us";
import { AISection } from "@/components/home/ai-section";
import { Process } from "@/components/home/process";
import { Engagement } from "@/components/home/engagement";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";
export default function HomePage() {
  return <><Hero/><Positioning/><Services/><Work/><WhyUs/><AISection/><Process/><Engagement/><FAQ/><FinalCTA/></>;
}
