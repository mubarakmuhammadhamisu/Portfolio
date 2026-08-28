"use client";

import { motion } from "motion/react";
import { Check, Zap, ArrowUpRight } from "lucide-react";
import RainbowButton from "./RainbowButton";

const PLANS = [
  {
    name: "Starter",
    price: "₦150,000",
    period: "one-time",
    tagline: "For local businesses needing an immediate, professional presence.",
    features: [
      "1–3 custom static/dynamic pages",
      "Mobile responsiveness",
      "Basic SEO setup",
      "Contact form integration",
      "14 days of post-launch support",
    ],
    cta: "Get Started",
    href: "#contact",
    highlight: false,
  },
  {
    name: "Full-Stack",
    price: "From ₦350,000",
    period: "milestone-based",
    tagline: "For startups needing web applications, custom UI/UX, or payment integration.",
    features: [
      "Dynamic React / Next.js build",
      "Database setup (Supabase)",
      "Payment gateway integration (Paystack)",
      "Admin backend setup",
      "Core testing",
    ],
    cta: "Book a Call",
    href: "#contact",
    highlight: true,
  },
  {
    name: "AI-Enhanced",
    price: "Custom",
    period: "quote",
    tagline: "For startups needing intelligent, automated customer support or agents.",
    features: [
      "Website integration",
      "24/7 multimodal AI customer service agent",
      "Or: workflow automation (Telegram / WhatsApp bots)",
      "Lead capture & automated client communication",
    ],
    cta: "Let's Talk",
    href: "#contact",
    highlight: false,
  },
];

const MAINTENANCE_ADDON = {
  name: "Monthly Hands-Off Maintenance",
  price: "Add-on",
  period: "recurring",
  tagline: "Keep your site running without lifting a finger.",
  features: [
    "Hosting management",
    "Domain renewals",
    "Monthly content edits",
    "Security updates",
    "Performance monitoring",
  ],
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="container mx-auto px-6 py-20"
    >
      <div className="space-y-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase" aria-hidden="true">
            Transparent Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl font-display font-semibold"
          >
            Pricing
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" aria-hidden="true" />
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            No hidden fees. No surprises. Just clean work at fair rates.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start"
          role="list"
          aria-label="Pricing plans"
        >
          {PLANS.map((plan, i) => (
            <motion.article
              key={plan.name}
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              aria-label={`${plan.name} plan — ${plan.price}${plan.period !== "quote" ? " " + plan.period : ""}`}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-white/[0.07] ring-1 ring-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                  : "glass hover:bg-white/[0.06]"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2" aria-label="Most popular plan">
                  <span className="flex items-center gap-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-blue-500 text-white px-3 py-1 rounded-full">
                    <Zap className="w-2.5 h-2.5" aria-hidden="true" /> Most Popular
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5">
                  <span className="text-3xl font-display font-bold">{plan.price}</span>
                  {plan.period !== "quote" && (
                    <span className="text-white/30 text-xs mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" aria-hidden="true" />

              {/* Features */}
              <ul className="space-y-2.5 flex-1" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-white/60 text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-2">
                <RainbowButton
                  href={plan.href}
                  icon={<ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />}
                  ariaLabel={`${plan.cta} — ${plan.name} plan`}
                >
                  {plan.cta}
                </RainbowButton>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Maintenance add-on */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-3xl mx-auto"
          aria-label={`Add-on: ${MAINTENANCE_ADDON.name}`}
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-1">
              Add-On &middot; {MAINTENANCE_ADDON.price} &middot; {MAINTENANCE_ADDON.period}
            </p>
            <p className="text-sm font-semibold text-white/90 mb-1">{MAINTENANCE_ADDON.name}</p>
            <p className="text-white/40 text-xs leading-relaxed">{MAINTENANCE_ADDON.tagline}</p>
          </div>
          <ul className="space-y-1.5 shrink-0" aria-label="Maintenance add-on features">
            {MAINTENANCE_ADDON.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-blue-400 shrink-0" aria-hidden="true" />
                <span className="text-white/50 text-xs">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        {/* Footer note */}
        <p className="text-center text-white/20 text-[11px]">
          All prices in Nigerian Naira (₦). Payment via Paystack — bank transfer or card.
        </p>

      </div>
    </section>
  );
}
