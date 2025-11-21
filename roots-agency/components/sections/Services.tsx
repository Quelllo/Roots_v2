"use client";

import { motion } from "framer-motion";
import { Palette, Monitor, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="services" className="py-24 bg-light-grey">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-deep-purple mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-service creative solutions tailored to your brand
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-deep-purple rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-yellow transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <service.icon
                  className="text-white group-hover:text-deep-purple transition-colors"
                  size={32}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold text-deep-purple mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-deep-purple rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href="/contact"
                className="inline-flex items-center text-deep-purple font-semibold group-hover:text-accent-yellow transition-colors"
              >
                Learn More
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-deep-purple rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss how
            we can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent-yellow text-deep-purple hover:bg-accent-yellow/90 text-lg px-8 py-6 font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

