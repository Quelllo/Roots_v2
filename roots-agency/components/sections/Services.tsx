"use client";

import { motion } from "framer-motion";
import { Palette, Monitor, Video } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "We craft distinctive brand identities that capture your essence and resonate with your audience. From logos to complete visual systems.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Packaging"],
  },
  {
    icon: Monitor,
    title: "Digital Experiences",
    description:
      "Beautiful, functional websites and digital products that engage users and drive results. We combine aesthetics with performance.",
    features: [
      "Website Design",
      "UI/UX Design",
      "Mobile Apps",
      "Interactive Design",
    ],
  },
  {
    icon: Video,
    title: "Motion & Content",
    description:
      "Compelling visual content that tells your story. From motion graphics to photography, we create content that captivates.",
    features: [
      "Motion Graphics",
      "Video Production",
      "Photography",
      "Social Content",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-paper-cream texture-noise">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-root-green flex-shrink-0" />
            <div>
              <h2 className="text-6xl md:text-7xl font-heading font-black text-ink-black mb-4 leading-none">
                What We<br/>Create
              </h2>
              <p className="text-xl text-ink-black/70 font-body max-w-2xl">
                Full-service creative solutions with no compromises
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border-4 border-ink-black p-8 group hover:bg-ink-black transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 border-4 border-ink-black bg-moss-accent flex items-center justify-center mb-6 group-hover:bg-paper-cream group-hover:border-paper-cream transition-colors">
                <service.icon
                  className="text-paper-cream group-hover:text-ink-black transition-colors"
                  size={32}
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-heading font-bold text-ink-black mb-4 group-hover:text-paper-cream transition-colors">
                {service.title}
              </h3>
              <p className="text-ink-black/80 mb-6 leading-relaxed font-body group-hover:text-paper-cream/80 transition-colors">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm font-mono uppercase tracking-wider text-ink-black/70 group-hover:text-paper-cream/70 transition-colors"
                  >
                    <span className="w-2 h-2 bg-ink-black group-hover:bg-paper-cream mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-root-green border-4 border-ink-black p-12 md:p-16 shadow-brutalist"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-heading font-black text-paper-cream mb-6 leading-tight">
              Ready to Grow Something Bold?
            </h3>
            <p className="text-paper-cream/80 text-lg mb-8 leading-relaxed font-body">
              Let's dig deep, find your roots, and create something that stands out.
              No cookie-cutter solutions. Just honest, impactful work.
            </p>
            <Link href="/contact">
              <button className="bg-moss-accent text-paper-cream font-mono uppercase tracking-wider px-10 py-4 text-base border-4 border-moss-accent hover:bg-paper-cream hover:text-ink-black hover:border-paper-cream transition-all hover:-translate-x-1 hover:-translate-y-1">
                Start Your Project
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
