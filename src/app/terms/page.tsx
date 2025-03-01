"use client";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Terms of Use
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
              1. Acceptance of Terms
            </h2>
            <p className="mt-4">
              By accessing and using TechMaze Solutions&apos; services, you
              accept and agree to be bound by the terms and conditions of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              2. Services
            </h2>
            <p className="mt-4">
              TechMaze Solutions provides B2B technology services, including but
              not limited to:
            </p>
            <ul className="mt-4 list-disc pl-8 space-y-3">
              <li>AI as a Service (AI SaaS) solutions</li>
              <li>Hybrid IT infrastructure services</li>
              <li>Networking solutions</li>
              <li>Security services</li>
              <li>Consulting and implementation services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              3. User Obligations
            </h2>
            <p className="mt-4">You agree to:</p>
            <ul className="mt-4 list-disc pl-8 space-y-3">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use services only for authorized business purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              4. Intellectual Property
            </h2>
            <p className="mt-4">
              All content, features, and functionality of our services are owned
              by TechMaze Solutions and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              5. Limitation of Liability
            </h2>
            <p className="mt-4">
              TechMaze Solutions shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              6. Termination
            </h2>
            <p className="mt-4">
              We reserve the right to terminate or suspend access to our
              services immediately, without prior notice or liability, for any
              reason whatsoever.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              7. Changes to Terms
            </h2>
            <p className="mt-4">
              We reserve the right to modify these terms at any time. We will
              notify users of any changes by updating the date at the top of
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              8. Governing Law
            </h2>
            <p className="mt-4">
              These terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which TechMaze Solutions operates,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              9. Contact Information
            </h2>
            <p className="mt-4">
              For any questions about these Terms of Use, please contact us at:
            </p>
            <div className="mt-4">
              <p>Email: legal@techmazesolutions.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
