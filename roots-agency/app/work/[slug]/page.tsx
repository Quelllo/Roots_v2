"use client";

import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-heading font-bold text-ink-black mb-4">
            Project Not Found
          </h1>
          <Link href="/">
            <Button className="bg-ink-black hover:bg-ink-black/90 text-paper-cream">
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-ink-black hover:text-root-green mb-8 group"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <span className="inline-block px-4 py-1 bg-moss-accent text-paper-cream font-mono uppercase tracking-wider text-sm mb-4 border-2 border-moss-accent">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-ink-black mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <User size={20} />
                  <div>
                    <p className="text-sm font-semibold text-ink-black font-mono uppercase tracking-wider">
                      Client
                    </p>
                    <p>{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={20} />
                  <div>
                    <p className="text-sm font-semibold text-ink-black font-mono uppercase tracking-wider">
                      Year
                    </p>
                    <p>{project.year}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-black font-mono uppercase tracking-wider mb-2">
                    Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-paper-cream text-ink-black text-sm border-2 border-ink-black font-mono uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="relative aspect-[16/9] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink-black mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink-black mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={image}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink-black mb-8">
                The Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-moss-accent border-2 border-ink-black flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-ink-black font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <p className="text-lg text-gray-700">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Like What You See?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Tell us about your project.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-moss-accent text-paper-cream hover:bg-paper-cream hover:text-ink-black text-lg px-8 py-6 border-4 border-moss-accent font-mono uppercase tracking-wider transition-all"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

