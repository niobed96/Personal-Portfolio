import React, { useState } from "react";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Please enter a subject (at least 3 characters).";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters).";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    // In production, replace console.log with API call
  };

  return (
    <>
      <div className="mx-20 my-14 bg-gray-300 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Aesthetic Section */}
          <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-gray-900 p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-200 mb-6">
              I am here to answer your questions, Reach out anytime!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:contact@example.com"
                  className="hover:underline"
                >
                  niobed.nexus@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a href="tel:+1234567890" className="hover:underline">
                  +250786745173
                </a>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-white text-center mb-6 lg:hidden">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto lg:hidden">
              We'd love to hear from you. Fill out the form below, and we'll get
              back to you soon!
            </p>

            <div className="space-y-6 py-20 px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-100 border-gray-600 text-black p-3 focus:ring-0 focus:border-blue-500 transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-100 border-gray-600 text-black p-3 focus:ring-0 focus:border-blue-500 transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]"
                    placeholder="your email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-100 border-gray-600 text-black p-3 focus:ring-0 focus:border-blue-500 transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-100 border-gray-600 text-black p-3 focus:ring-0 focus:border-blue-500 transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)]"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full md:w-1/2 bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                >
                  Send Message
                </button>
              </div>
            </div>

            {isSubmitted && (
              <div className="text-center text-blue-400 mt-6">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
