// src/components/NewsletterPopup.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed or dismissed the popup
    const hasSubscribed = localStorage.getItem("newsletterSubscribed");
    const hasDismissed = localStorage.getItem("newsletterDismissed");

    if (!hasSubscribed && !hasDismissed) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      // Here you would typically send the email to your newsletter service
      console.log("Subscribing email:", email);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mark as subscribed
      localStorage.setItem("newsletterSubscribed", "true");
      setIsOpen(false);

      // Reset form
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Remember user's choice for 30 days
    localStorage.setItem("newsletterDismissed", "true");

    // Optional: Remove after 30 days
    setTimeout(
      () => {
        localStorage.removeItem("newsletterDismissed");
      },
      30 * 24 * 60 * 60 * 1000
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 bg-opacity-50 backdrop-blur-sm"
            onClick={handleOverlayClick}
          />

          {/* Container with padding */}
          <div className="fixed inset-0 z-50 p-4 flex items-center justify-center">
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Content */}
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center border bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  aria-label="Close newsletter popup"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />

                <div className="relative p-6">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-light text-gray-900 mb-2">
                      Join Our Style Community
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Get exclusive access to new collections, styling tips, and
                      special offers delivered straight to your inbox.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 placeholder-gray-500 text-sm transition-all duration-200"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold text-sm hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Subscribing...
                        </div>
                      ) : (
                        "Subscribe Now"
                      )}
                    </button>
                  </form>

                  {/* Footer Text */}
                  <p className="text-center text-gray-500 text-xs mt-4">
                    No spam, unsubscribe at any time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
