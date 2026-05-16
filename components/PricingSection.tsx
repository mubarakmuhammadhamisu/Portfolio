"use client";

import { motion } from "motion/react";
import { Check, Zap } from "lucide-react";
import RainbowButton from "./RainbowButton";

const PLANS = [
  {
    name: "Starter",
    price: "₦150,000",
    period: "one-time",
    tagline: "Perfect for small businesses getting online.",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    cta: "Get Started",
    href: "#contact",
    highlight: false,
  },
  {
    name: "Professional",
    price: "₦350,000",
    period: "one-time",
    tagline: "For businesses that need more power and polish.",
    features: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "Supabase / database integration",
      "Paystack payment setup",
      "Admin dashboard",
      "3 rounds of revisions",
      "4 weeks delivery",
    ],
    cta: "Book a Call",
    href: "#contact",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    period: "quote",
    tagline: "Full-scale platforms and complex web applications.",
    features: [
      "Unlimited pages",
      "Full-stack development",
      "AI feature integration",
      "Multi-role auth system",
      "Performance optimisation",
      "Ongoing maintenance plan",
      "Priority support",
    ],
    cta: "Let's Talk",
    href: "#contact",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-20">
      <div className="space-y-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Pricing
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            No hidden fees. No surprises. Just clean work at fair rates.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-white/[0.07] ring-1 ring-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                  : "glass hover:bg-white/[0.06]"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-blue-500 text-white px-3 py-1 rounded-full">
                    <Zap className="w-2.5 h-2.5" /> Most Popular
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
              <div className="h-px bg-white/[0.06]" />

              {/* Features */}
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-white/60 text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-2">
                <RainbowButton href={plan.href}>{plan.cta}</RainbowButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/20 text-[11px]">
          All prices in Nigerian Naira (₦). Payment via Paystack — bank transfer or card.
        </p>

      </div>
    </section>
  );
}
