"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "We believe design should have meaning and create positive impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and explore new creative territories.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great work happens when we work together with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to delivering work that exceeds expectations.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/images/team/sarah.svg",
  },
  {
    name: "Marcus Johnson",
    role: "Design Lead",
    image: "/images/team/marcus.svg",
  },
  {
    name: "Emma Rodriguez",
    role: "Strategy Director",
    image: "/images/team/emma.svg",
  },
  {
    name: "David Kim",
    role: "Head of Digital",
    image: "/images/team/david.svg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-light-grey">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-ink-black mb-6">
              We Are Roots
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              A creative agency rooted in bold ideas, authentic storytelling, and
              meaningful connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Split Screen */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about-story.svg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2018, Roots emerged from a simple belief: that great
                  design has the power to transform brands and move people.
                </p>
                <p>
                  We started as a small collective of designers and storytellers
                  who wanted to do things differently. No cookie-cutter solutions,
                  no generic templates—just honest, impactful work that reflects
                  who our clients truly are.
                </p>
                <p>
                  Today, we're a full-service creative agency working with brands
                  across industries, but our mission remains the same: create work
                  that matters, tell stories that resonate, and build relationships
                  that last.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-light-grey">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink-black mb-4">
              What We Believe
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-ink-black border-4 border-ink-black flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-ink-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink-black mb-4">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-600">
              The creative minds behind the magic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-ink-black mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your
              project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-moss-accent text-paper-cream font-mono uppercase tracking-wider px-8 py-4 border-4 border-moss-accent hover:bg-paper-cream hover:text-ink-black transition-all text-lg"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

