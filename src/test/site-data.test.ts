import { describe, expect, it } from "vitest";
import { PLANS, buildQuoteMessage, buildWhatsAppLink } from "@/components/site/data";

describe("pricing", () => {
  it("lists the four starting prices", () => {
    expect(PLANS.map((p) => [p.name, p.price])).toEqual([
      ["Landing Page", "₹6,999"],
      ["Business Website", "₹14,999"],
      ["Growth Website", "₹29,999"],
      ["E-commerce Launch", "₹39,999"],
    ]);
  });
});

describe("quote request", () => {
  it("sends to the studio WhatsApp number with the enquiry text", () => {
    const msg = buildQuoteMessage({
      name: "Asha", email: "a@x.in", phone: "999", business: "Asha Bakes",
      service: "Landing Page", budget: "Under ₹10,000", details: "Need a menu page",
    });
    const url = buildWhatsAppLink(msg);
    expect(url.startsWith("https://wa.me/919182419070?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toContain("Business: Asha Bakes");
  });
});
