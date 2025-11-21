"use client";

import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Curated stock images for design portfolio
const portfolioImages = [
  {
    title: "Brand Identity",
    category: "BRANDING",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&h=1000&fit=crop",
    slug: "urban-brew-rebrand",
  },
  {
    title: "Digital Product",
    category: "UI/UX",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&h=1000&fit=crop",
    slug: "nexus-app",
  },
  {
    title: "Campaign",
    category: "CREATIVE",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&h=1000&fit=crop",
    slug: "earthwise-campaign",
  },
  {
    title: "Editorial Design",
    category: "PRINT",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&h=1000&fit=crop",
    slug: "lumina-identity",
  },
  {
    title: "Web Experience",
    category: "DIGITAL",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=1000&fit=crop",
    slug: "pulse-fitness",
  },
  {
    title: "E-commerce",
    category: "PLATFORM",
    thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&h=1000&fit=crop",
    slug: "artisan-collective",
  },
  {
    title: "Brand System",
    category: "IDENTITY",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=1000&fit=crop",
    slug: "urban-brew-rebrand",
  },
  {
    title: "App Design",
    category: "MOBILE",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&h=1000&fit=crop",
    slug: "nexus-app",
  },
];

const velocity = [3, -3, 2.5];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-ink-black texture-noise overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 border-4 border-moss-accent flex-shrink-0" />
            <div>
              <h2 className="text-6xl md:text-7xl font-heading font-black text-paper-cream mb-4 leading-none">
                Selected<br/>Work
              </h2>
              <p className="text-xl text-paper-cream/70 font-body max-w-2xl">
                Projects that pushed boundaries, challenged conventions, and created lasting impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Image Rows */}
      <div className="flex flex-col space-y-6 mb-16">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {portfolioImages.map(({ title, category, thumbnail, slug }) => (
              <Link
                key={`${title}-${index}`}
                href={`/work/${slug}`}
                className="group"
              >
                <div className="relative h-[12rem] w-[9rem] md:h-[16rem] md:w-[12rem] xl:h-[24rem] xl:w-[18rem] border-4 border-paper-cream overflow-hidden">
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-moss-accent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-paper-cream/80 mb-2">
                      {category}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-paper-cream leading-tight">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollVelocity>
        ))}
      </div>

      {/* Scrolling Text */}
      <ScrollVelocity velocity={4} className="py-8 border-y-4 border-moss-accent font-heading text-paper-cream">
        BOLD WORK · LASTING IMPACT · CREATIVE COURAGE · 
      </ScrollVelocity>

      {/* View All CTA */}
      <div className="container mx-auto px-6 mt-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/work">
            <button className="bg-moss-accent text-paper-cream font-mono uppercase tracking-wider px-12 py-5 text-lg border-4 border-moss-accent hover:bg-paper-cream hover:text-ink-black transition-all hover:-translate-y-1 shadow-none">
              Explore All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
