// src/app/contact-us/page.js

"use client";
import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-2">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Please fill out the form below and we'll
            respond within 1–2 business days.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Available Monday–Saturday, 9 AM – 6 PM (WAT)
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Form
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. We'll get back to you within
                    1-2 business days.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Enquiry / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium text-lg transition-colors ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Other Ways to Reach Us
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/2347036210107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                    <span className="text-green-600">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">
                      WhatsApp / Call
                    </p>
                    <p className="text-green-700 text-sm">+234 703 621 0107</p>
                  </div>
                </a>

                <a
                  href="mailto:admin@kavanthebrand.com"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Email</p>
                    <p className="text-blue-700 text-sm">
                      admin@kavanthebrand.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/kavanthebrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-pink-200 transition-colors">
                    <span className="text-pink-600">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-pink-900">Instagram</p>
                    <p className="text-pink-700 text-sm">@kavanthebrand</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-semibold">9 AM – 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-400">Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-500">
                    Time Zone: WAT (West Africa Time)
                  </span>
                </div>
              </div>
            </div>

            {/* Note from Us */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-sm border border-purple-200 p-6">
              <div className="text-center">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  A Little Note from Us
                </h3>
                <p className="text-purple-800 text-sm leading-relaxed">
                  Every Kavan piece is made with intention and care—just like
                  every message we receive. Thank you for connecting with us;
                  your story matters here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
