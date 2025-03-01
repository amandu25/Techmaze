"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl leading-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              1. Information We Collect
            </h2>
            <p className="mt-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="mt-4 list-disc pl-8 space-y-3">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Communication preferences</li>
              <li>Information about your business needs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">We use the information we collect to:</p>
            <ul className="mt-4 list-disc pl-8 space-y-3">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              3. Information Sharing
            </h2>
            <p className="mt-4">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="mt-4 list-disc pl-8 space-y-3">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisers</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              4. Security
            </h2>
            <p className="mt-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              5. Your Rights
            </h2>
            <p className="mt-4">You have the right to:</p>
            <ul className="mt-4 list-disc pl-8 space-y-3">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              6. Contact Us
            </h2>
            <p className="mt-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-4">
              <p>Email: privacy@techmazesolutions.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
