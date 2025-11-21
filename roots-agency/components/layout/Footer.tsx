"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const navigation = {
  main: [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink-black text-paper-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-heading font-bold">ROOTS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bold, impactful design that tells your story. We create
              experiences that connect and inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-paper-cream/70 hover:text-moss-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} />
                <a
                  href="mailto:hello@rootsagency.com"
                  className="hover:text-moss-accent transition-colors"
                >
                  hello@rootsagency.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} />
                <a
                  href="tel:+1234567890"
                  className="hover:text-moss-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 border-2 border-paper-cream bg-paper-cream/10 flex items-center justify-center hover:bg-moss-accent hover:text-paper-cream transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Roots Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-accent-yellow transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-accent-yellow transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

