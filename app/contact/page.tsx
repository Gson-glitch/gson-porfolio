'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { contactInfo } from '@/data/skills';
import Footer from '@/components/dom/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Contact from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-24 md:py-32 px-4 md:px-6 min-h-screen bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Get In Touch</h2>
            <p className="text-sm md:text-lg text-foreground/80">
              I&apos;m currently open to new opportunities and collaborations. Feel free to
              reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="glass rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all flex items-center gap-4 block"
              >
                <div className="p-2 md:p-3 bg-primary/20 rounded-lg">
                  <Mail className="text-primary w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-foreground/60">Email</p>
                  <p className="font-medium text-sm md:text-base break-all">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="glass rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all flex items-center gap-4 block"
              >
                <div className="p-2 md:p-3 bg-accent/20 rounded-lg">
                  <Phone className="text-accent w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-foreground/60">Phone</p>
                  <p className="font-medium text-sm md:text-base">{contactInfo.phone}</p>
                </div>
              </a>

              <div className="glass rounded-xl p-5 md:p-6">
                <p className="text-xs md:text-sm text-foreground/60 mb-4">Connect with me</p>
                <div className="flex items-center gap-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass rounded-xl p-5 md:p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-sm md:text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={18} className="md:w-5 md:h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-500 text-xs md:text-sm text-center">
                    Opening your email client...
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs md:text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
