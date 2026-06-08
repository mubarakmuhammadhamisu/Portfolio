"use client";

import { motion } from "motion/react";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { useState, useId } from "react";
import RainbowButton from "./RainbowButton";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "hamisumubarak447@gmail.com",
    href: "mailto:hamisumubarak447@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 916 608 2367",
    href: "https://wa.me/2349166082367",
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const uid = useId();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  function handleSubmit() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: wire up to Formspree / Resend / Supabase
    setSent(true);
  }

  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const msgId = `${uid}-message`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
            Get in Touch
          </span>
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-display font-semibold"
          >
            Let&apos;s Work Together
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" aria-hidden="true" />
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
              <div
                className="flex flex-col items-center justify-center py-12 space-y-3 text-center"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <Send className="w-10 h-10 text-blue-400" aria-hidden="true" />
                <p className="text-lg font-bold">Message sent!</p>
                <p className="text-white/40 text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div role="form" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor={nameId}
                      className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block"
                    >
                      Name <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={nameId}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${nameId}-err` : undefined}
                      className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all ${errors.name ? "border-red-500/60" : "border-white/[0.08]"}`}
                    />
                    {errors.name && (
                      <p id={`${nameId}-err`} className="text-red-400 text-[10px]" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor={emailId}
                      className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block"
                    >
                      Email <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${emailId}-err` : undefined}
                      className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all ${errors.email ? "border-red-500/60" : "border-white/[0.08]"}`}
                    />
                    {errors.email && (
                      <p id={`${emailId}-err`} className="text-red-400 text-[10px]" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 mb-5">
                  <label
                    htmlFor={msgId}
                    className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block"
                  >
                    Message <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id={msgId}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? `${msgId}-err` : undefined}
                    className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all resize-none ${errors.message ? "border-red-500/60" : "border-white/[0.08]"}`}
                  />
                  {errors.message && (
                    <p id={`${msgId}-err`} className="text-red-400 text-[10px]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="max-w-[200px]">
                  <RainbowButton
                    onClick={handleSubmit}
                    icon={<Send className="w-3 h-3" aria-hidden="true" />}
                    type="button"
                    ariaLabel="Send your message to Mubarak"
                  >
                    Send Message
                  </RainbowButton>
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact links */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Direct contact options"
            className="space-y-4"
          >
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.08] hover:ring-1 hover:ring-white/15 transition-all duration-300 group"
                aria-label={`Contact via ${link.label}: ${link.value}`}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div
                  className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <link.icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
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
            <div className="glass rounded-2xl p-5 mt-2" aria-label="Availability status">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
                  Availability
                </span>
              </div>
              <p className="text-sm font-medium text-white/80">Open to new projects</p>
              <p className="text-xs text-white/30 mt-0.5">Taking on clients from June 2025</p>
            </div>
          </motion.aside>

        </div>

      </div>
    </section>
  );
}
