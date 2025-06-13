'use client';
import { useToast } from '@/components/providers/ToastProvider';
import apiClient from '@/lib/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please enter your message (at least 10 characters)')
});

export default function ContactFormAdvanced() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });
  const onSubmit = async (data) => {
    try {
      // Prepare data for API
      const apiData = {
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        subject: 'general', // Default subject
        message: data.message
      };

      console.log('Submitting form data:', apiData);

      // Send to backend API
      const response = await apiClient.submitContactForm(apiData);

      if (response.success) {
        toast.success('Message sent successfully! We will contact you soon.');
        reset();
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };
  return (
    <section className="mt-12 pb-20 pt-20 banner banner-3 banner-contact">
      <div className="container mx-auto px-4">
        <div id="contact" className="row bulb flex flex-wrap -mx-4 items-center min-h-[300px]">
          {/* ACT NOW Button */}
          <div className="w-full sm:w-1/3 md:w-1/3 px-4">
            <a
              className="pulse2 inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full font-bold text-xl leading-tight"
              href="#contact"
            >
              ACT<br />NOW
            </a>
          </div>

          {/* Form Section */}
          <div className="w-full sm:w-2/3 px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Form Header */}
              <div className="w-full px-4 mb-6">
                <h2 className="text-[#1b695e] text-4xl font-normal mb-0" style={{ textShadow: '3px 3px 3px rgba(255,255,255,.9)' }}>
                  Get started today...
                </h2>                <p className="text-gray-700 text-lg">
                  You are one step away from saving your business money and going green
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap -mx-4">
                {/* Left Column - Personal Info */}
                <div className="w-full md:w-5/12 px-4">
                  {/* Name Field */}
                  <div className="form-group mb-4">                    <label className="block text-gray-700 text-sm font-medium mb-2">
                    Name
                  </label>
                    {errors.name && (
                      <span className="text-red-400 text-sm block mb-1">
                        {errors.name.message}
                      </span>
                    )}                    <input
                      {...register('name')}
                      type="text"
                      className="form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="Your name (required)"
                      title="Please enter your name (at least 2 characters)"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="form-group mb-4">                    <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                    {errors.email && (
                      <span className="text-red-400 text-sm block mb-1">
                        {errors.email.message}
                      </span>
                    )}                    <input
                      {...register('email')}
                      type="email"
                      className="form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="Email (required)"
                      title="Please enter your email"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="form-group mb-4">                    <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone number
                  </label><input
                      {...register('phone')}
                      type="tel"
                      className="form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="Phone number (optional)"
                    />
                  </div>
                </div>

                {/* Right Column - Message */}
                <div className="w-full md:w-7/12 px-4">
                  {/* Message Field */}
                  <div className="form-group mb-4">                    <label className="block text-gray-700 text-sm font-medium mb-2">
                    How can we help?
                  </label>
                    {errors.message && (
                      <span className="text-red-400 text-sm block mb-1">
                        {errors.message.message}
                      </span>
                    )}                    <textarea
                      {...register('message')}
                      rows={6}
                      className="form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="Your message (required)"
                      style={{ height: '135px' }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-success btn-block w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white px-4 py-3 rounded font-medium transition-colors disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'send message'}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
