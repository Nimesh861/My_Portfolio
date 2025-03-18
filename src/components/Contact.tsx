import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pnimesh0806@gmail.com'
      };

      const response = await emailjs.send(
        'service_epgnnif',
        'template_ar1bd9c',
        templateParams,
        'GmS4A2XWnr-PI6Rcz'
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-24 md:pl-16 px-4 md:px-8 lg:px-16 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] z-0"></div>

      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            className="fixed top-16 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}

        {submitError && (
          <motion.div
            className="fixed top-16 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            ❌ Failed to send message. Try again.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="relative z-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        
        {/* FIX: Ensure "Contact Me" is Visible */}
        <h2 className="text-white text-3xl font-bold mb-4">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-200">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              Interested in collaborating or discussing new opportunities?
              Reach out via email or connect with me on GitHub and LinkedIn.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:nimesh862001@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>nimesh862001@gmail.com</span>
              </a>
              <a href="https://github.com/Nimesh861" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span>github.com/Nimesh861</span>
              </a>
              <a href="https://www.linkedin.com/in/patel--nimesh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/patel--nimesh</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-l-4 border-green-500 p-3 shadow-md rounded">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Your name" />
              </div>

              <div className="border-l-4 border-blue-500 p-3 shadow-md rounded">
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="your.email@example.com" />
              </div>

              <div className="border-l-4 border-purple-500 p-3 shadow-md rounded">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-field resize-none" placeholder="Your message here..." />
              </div>

              <motion.button type="submit" className="relative overflow-hidden text-white py-3 px-6 rounded shadow-lg w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
