"use client";

import { motion } from "motion/react";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { useState } from "react";
import RainbowButton from "./RainbowButton";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "mubarak@example.com",
    href: "mailto:hamisumubarak447@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+24 9166082367",
    href: "https://wa.me/2349166082367 ",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria (Remote-first)",
    href: "#",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    // TODO: wire up to your preferred form handler (Formspree, Resend, Supabase, etc.)
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  }

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
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
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Let&apos;s Work Together
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            Have a project? Fill the form or reach out directly — I usually respond within 24 hours.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 max-w-5xl mx-auto">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center">
                <Send className="w-10 h-10 text-blue-400" />
                <p className="text-lg font-bold">Message sent!</p>
                <p className="text-white/40 text-sm">I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <div className="max-w-[200px]">
                  <RainbowButton onClick={handleSubmit} icon={<Send className="w-3 h-3" />}>
                    Send Message
                  </RainbowButton>
                </div>
              </>
            )}
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {CONTACT_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.08] hover:ring-1 hover:ring-white/15 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <link.icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                  Availability
                </span>
              </div>
              <p className="text-sm font-medium text-white/80">
                Open to new projects
              </p>
              <p className="text-xs text-white/30 mt-0.5">
                Taking on clients from June 2025
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
