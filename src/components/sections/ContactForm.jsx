'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name is required (at least 2 characters)';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="mt-20 pb-20 pt-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div id="contact" className="flex flex-wrap -mx-4 items-center">
          {/* Call to Action */}
          <div className="w-full sm:w-1/3 md:w-1/3 px-4 text-center mb-8 sm:mb-0">
            <Link
              href="#contact"
              className="pulse2 inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full font-bold text-xl animate-pulse transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ACT<br />NOW
            </Link>
          </div>
          
          {/* Contact Form */}
          <div className="w-full sm:w-2/3 px-4">
            <div className="mb-8">
              <h2 className="section-heading-light text-3xl md:text-4xl mb-4">Get started today...</h2>
              <p className="text-lg md:text-xl text-blue-100">
                You are one step away from saving your business money and going green
              </p>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500 text-white rounded-lg">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500 text-white rounded-lg">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="md:col-span-5 space-y-4">
                <div className="form-group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    placeholder="Your name (required)"
                    title="Please enter your name (at least 2 characters)"
                  />
                  {errors.name && (
                    <span className="text-red-300 text-sm mt-1 block">{errors.name}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    placeholder="Email (required)"
                    title="Please enter your email address"
                  />
                  {errors.email && (
                    <span className="text-red-300 text-sm mt-1 block">{errors.email}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    placeholder="Phone number (optional)"
                  />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="md:col-span-7">
                <div className="form-group">
                  <label className="block text-sm font-medium mb-2 text-blue-100">
                    How can we help? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="8"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 resize-vertical"
                    placeholder="Your message (required)"
                    style={{ minHeight: '135px' }}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-300 text-sm mt-1 block">{errors.message}</span>
                  )}
                </div>
                
                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="success"
                    size="block"
                    disabled={isSubmitting}
                    className="w-full h-12 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'send message'
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
