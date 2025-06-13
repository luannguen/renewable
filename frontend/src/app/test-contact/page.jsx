'use client';

// Test Contact Form Page
// File: frontend/src/app/test-contact/page.jsx

import ContactForm from '@/components/forms/ContactForm';

export default function TestContactPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Test Contact Form
                </h1>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Test Instructions</h3>
                    <ul className="text-blue-800 space-y-1 text-sm">
                        <li>• Fill out the form and submit to test API integration</li>
                        <li>• Check browser console for API calls</li>
                        <li>• Verify form validation works</li>
                        <li>• Test success/error states</li>
                    </ul>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}
