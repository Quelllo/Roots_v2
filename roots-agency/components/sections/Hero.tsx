"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-paper-cream texture-noise">
      {/* Large Typography Block */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Main Headline */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="font-mono text-sm uppercase tracking-wider border-2 border-ink-black px-4 py-2 inline-block bg-moss-accent text-paper-cream">
                  Design Studio
                </span>
              </motion.div>
              
              <h1 className="text-[clamp(3rem,12vw,10rem)] font-heading font-black leading-[0.9] text-ink-black">
                ROOTS
              </h1>
              
              <div className="max-w-xl">
                <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-light leading-tight text-ink-black/80">
                  Growing bold ideas<br/>
                  from the ground up
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content Block */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="bg-ink-black text-paper-cream p-8 lg:p-12 border-brutalist shadow-brutalist">
              <p className="text-lg font-body leading-relaxed mb-8">
                We're a creative agency that doesn't do ordinary.
                We dig deep, find your roots, and craft brands that grow
                with intention and impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#work">
                  <Button
                    size="lg"
                    className="bg-moss-accent hover:bg-moss-accent/90 text-paper-cream font-mono uppercase tracking-wider border-2 border-moss-accent transition-all hover:translate-x-1 hover:translate-y-1 shadow-none"
                  >
                    View Work
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-paper-cream text-paper-cream hover:bg-paper-cream hover:text-ink-black font-mono uppercase tracking-wider transition-all"
                  >
                    Start Project
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-root-green opacity-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-moss-accent opacity-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-ink-black/60">
          Scroll
        </span>
        <motion.div
          className="w-0.5 h-12 bg-ink-black/40"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
