"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

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
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-deep-purple mb-6">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Have a project in mind? We'd love to hear about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-purple mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                Whether you have a project in mind, want to learn more about our
                services, or just want to say hello, we're here to help.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-deep-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-purple mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@rootsagency.com"
                      className="text-gray-600 hover:text-deep-purple transition-colors"
                    >
                      hello@rootsagency.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-deep-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-purple mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-deep-purple transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-deep-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-purple mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      123 Creative Street
                      <br />
                      Design District, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-light-grey rounded-lg">
                <h3 className="font-semibold text-deep-purple mb-3">
                  Office Hours
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-deep-purple mb-6">
                  Send us a Message
                </h3>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-deep-purple">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="mt-2"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-deep-purple">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <Label htmlFor="company" className="text-deep-purple">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      className="mt-2"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <Label htmlFor="service" className="text-deep-purple">
                      Service Interested In
                    </Label>
                    <select
                      id="service"
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="branding">Branding</option>
                      <option value="digital">Digital Experiences</option>
                      <option value="motion">Motion & Content</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-deep-purple">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-deep-purple hover:bg-deep-purple/90 text-white py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 bg-light-grey">
        <div className="container mx-auto px-6">
          <motion.div
            className="aspect-[16/9] md:aspect-[21/9] bg-gray-300 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Replace with actual map integration (Google Maps, Mapbox, etc.) */}
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <p>Map Integration Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

