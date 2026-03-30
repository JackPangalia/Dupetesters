"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  const inputClass =
    "w-full px-4 py-3 bg-white border border-parchment text-sm text-charcoal placeholder:text-stone focus:outline-none focus:border-accent transition-colors duration-300";

  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 text-center border-b border-parchment">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
            Get in Touch
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl tracking-tightest text-ink mb-3">
            Contact Us
          </h1>
          <p className="text-charcoal-light font-light max-w-md mx-auto">
            We&apos;d love to hear from you. Our team typically responds within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact methods */}
          <div className="space-y-10">
            {[
              {
                icon: Mail,
                title: "Email",
                detail: "support@dupetesters.com",
                sub: "For general enquiries and support",
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                detail: "Available on site",
                sub: "Mon-Fri, 9am-6pm GMT",
              },
              {
                icon: Clock,
                title: "Response Time",
                detail: "Within 24 hours",
                sub: "Usually much sooner",
              },
            ].map((method) => (
              <div key={method.title} className="flex gap-4">
                <method.icon size={20} strokeWidth={1.2} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-ink mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-charcoal font-light">
                    {method.detail}
                  </p>
                  <p className="text-xs text-stone-dark font-light mt-0.5">
                    {method.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="First name" className={inputClass} />
                <input type="text" placeholder="Last name" className={inputClass} />
              </div>
              <input type="email" placeholder="Email address" className={inputClass} />
              <select className={inputClass}>
                <option value="">What is this about?</option>
                <option value="order">Order enquiry</option>
                <option value="product">Product question</option>
                <option value="return">Return or exchange</option>
                <option value="wholesale">Wholesale enquiry</option>
                <option value="other">Something else</option>
              </select>
              <textarea
                rows={6}
                placeholder="Your message"
                className={`${inputClass} resize-none`}
              />
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
