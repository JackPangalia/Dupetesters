"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-stone-dark font-light mt-3">
            Last updated: March 2026
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        <div className="prose-custom space-y-8 text-sm text-charcoal-light font-light leading-relaxed">
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Information We Collect</h2>
            <p>
              When you visit our site, we collect certain information about your device,
              your interaction with the site, and information necessary to process your
              purchases. We may also collect additional information if you contact us for
              customer support. We use this information to fulfil orders, communicate with
              you, screen for fraud, and improve our site.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">How We Use Your Information</h2>
            <p>
              We use the personal information we collect to fulfil orders, process payments,
              communicate with you about products and promotions, and improve our store. We
              do not sell your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Sharing Your Information</h2>
            <p>
              We share your personal information with service providers who help us deliver
              our services, including payment processors (Stripe), shipping carriers, and
              email marketing platforms. These providers only have access to the information
              necessary to perform their functions.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Your Rights</h2>
            <p>
              If you are a European resident, you have the right to access, correct, update,
              or request deletion of your personal information. You can exercise these rights
              by contacting us at support@dupetesters.com.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to personalise content, analyse
              traffic, and improve your experience. You can control cookies through your browser
              settings.
            </p>
          </div>
          <div>
            <h2 className="font-editorial text-xl text-ink mb-3">Contact</h2>
            <p>
              For questions about this privacy policy or your personal data, contact us at
              support@dupetesters.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
