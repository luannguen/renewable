'use client';

// Contact Form Component matching original template
// File: frontend/src/components/forms/ContactForm.jsx

import { useContactForm } from '@/hooks/useContactForm';

export default function ContactForm({ className = '' }) {
    const {
        formData,
        errors,
        isSubmitting,
        isSubmitted,
        submitError,
        submitSuccess,
        updateField,
        submitForm,
        resetForm,
        validateField
    } = useContactForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await submitForm();

        if (success) {
            // Show success message for 5 seconds
            setTimeout(() => {
                resetForm();
            }, 5000);
        }
    };

    const handleFieldChange = (field, value) => {
        updateField(field, value);
    };

    const handleFieldBlur = (field) => {
        if (isSubmitted) {
            validateField(field);
        }
    };

    return (
        <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
            <h2 className="text-[#1b695e] text-4xl font-normal mb-0" style={{ textShadow: '3px 3px 3px rgba(255,255,255,.9)' }}>
                Get started today...
            </h2>
            <p className="text-gray-700 text-lg mb-6">
                You are one step away from saving your business money and going green
            </p>

            {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>
                        <div>
                            <h4 className="text-green-800 font-semibold">Success!</h4>
                            <p className="text-green-700">Thank you for your message. We'll get back to you soon!</p>
                        </div>
                    </div>
                </div>
            )}

            {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                        <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                        <div>
                            <h4 className="text-red-800 font-semibold">Error</h4>
                            <p className="text-red-700">{submitError}</p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="w-full flex flex-wrap -mx-4">
                <div className="w-full md:w-5/12 px-4">
                    {/* Name Field */}
                    <div className="form-group mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleFieldChange('name', e.target.value)}
                            onBlur={() => handleFieldBlur('name')}
                            className={`form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Your name (required)"
                            title="Please enter your name (at least 2 characters)"
                            name="name"
                            disabled={isSubmitting}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="form-group mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleFieldChange('email', e.target.value)}
                            onBlur={() => handleFieldBlur('email')}
                            className={`form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Email (required)"
                            title="Please enter your email"
                            name="email"
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div className="form-group mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleFieldChange('phone', e.target.value)}
                            onBlur={() => handleFieldBlur('phone')}
                            className={`form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${errors.phone ? 'border-red-500' : ''}`}
                            placeholder="Phone number (optional)"
                            name="phone"
                            disabled={isSubmitting}
                        />
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                        )}
                    </div>
                </div>

                <div className="w-full md:w-7/12 px-4">
                    {/* Message Field */}
                    <div className="form-group mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            How can we help?
                        </label>
                        <textarea
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={(e) => handleFieldChange('message', e.target.value)}
                            onBlur={() => handleFieldBlur('message')}
                            className={`form-control w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${errors.message ? 'border-red-500' : ''}`}
                            placeholder="Your message (required)"
                            style={{ height: '135px' }}
                            disabled={isSubmitting}
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                        )}
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
    );
}
