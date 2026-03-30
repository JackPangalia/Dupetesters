"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div>
      <section className="py-16 lg:py-20 text-center border-b border-parchment">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
            Legal
          </p>
          <h1 className="font-editorial text-4xl lg:text-5xl tracking-tightest text-ink">
            Terms of Service
          </h1>
          <p className="text-sm text-stone-dark font-light mt-3">
            Last updated: March 2026
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        <div className="space-y-8 text-sm text-charcoal-light font-light leading-relaxed">
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Overview</h2>
            <p>
              This website is operated by Dupetesters. Throughout the site, the terms
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to
              Dupetesters. By visiting our site and/or purchasing from us, you engage in
              our &ldquo;Service&rdquo; and agree to be bound by these terms and conditions.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Products & Services</h2>
            <p>
              Our products are fragrance alternatives inspired by popular designer and niche
              fragrances. We do not claim to sell or be affiliated with the original brands.
              All brand names and trademarks mentioned are the property of their respective
              owners and are used for comparison purposes only.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Pricing & Availability</h2>
            <p>
              Prices are listed in GBP and are subject to change without notice. We reserve
              the right to limit quantities of any products. We make every effort to display
              product information accurately, but we do not warrant that descriptions,
              pricing, or other content is error-free.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Orders & Payment</h2>
            <p>
              We reserve the right to refuse any order. Payment is processed securely through
              Stripe. By placing an order, you confirm that you are authorised to use the
              payment method provided.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Intellectual Property</h2>
            <p>
              All content on this site — including text, graphics, logos, images, and
              software — is the property of Dupetesters and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written consent.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Limitation of Liability</h2>
            <p>
              We shall not be liable for any direct, indirect, incidental, or consequential
              damages resulting from your use of this site or any products purchased. Our
              liability is limited to the amount paid for the product in question.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Contact</h2>
            <p>
              For questions about these terms, please contact us at support@dupetesters.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
