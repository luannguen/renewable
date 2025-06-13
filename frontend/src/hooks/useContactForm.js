// Contact Form Hook cho RenewWeb Frontend
// File: frontend/src/hooks/useContactForm.js

'use client';

import apiClient from '@/lib/api';
import { handleApiError, validateForm } from '@/lib/error-handler';
import { useState } from 'react';

const contactFormRules = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 100,
        label: 'Name'
    },
    email: {
        required: true,
        email: true,
        label: 'Email'
    },
    phone: {
        phone: true,
        label: 'Phone number'
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 1000,
        label: 'Message'
    }
};

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const updateField = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const validateFormData = () => {
        const validation = validateForm(formData, contactFormRules);
        setErrors(validation.errors);
        return validation.isValid;
    };

    const submitForm = async () => {
        setIsSubmitted(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        // Validate form
        if (!validateFormData()) {
            return false;
        } try {
            setIsSubmitting(true);

            // Use form data directly (no transformation needed)
            const apiData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || undefined,
                subject: 'general', // Default subject since we don't have subject selector
                message: formData.message
            };

            console.log('Submitting contact form with data:', apiData);

            const response = await apiClient.submitContactForm(apiData);

            if (response.success) {
                setSubmitSuccess(true);                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setIsSubmitted(false);
                setErrors({});
                return true;
            } else {
                throw new Error(response.message || 'Có lỗi xảy ra khi gửi form');
            }
        } catch (err) {
            const handledError = handleApiError(err, '/api/contact-form');
            setSubmitError(handledError.message);

            // Handle validation errors from server
            if (handledError.errors) {
                setErrors(handledError.errors);
            }

            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: ''
        });
        setErrors({});
        setIsSubmitted(false);
        setSubmitError(null);
        setSubmitSuccess(false);
    };

    return {
        formData,
        errors,
        isSubmitting,
        isSubmitted,
        submitError,
        submitSuccess,
        updateField,
        submitForm,
        resetForm,
        validateField: (field) => {
            const fieldRules = { [field]: contactFormRules[field] };
            const fieldData = { [field]: formData[field] };
            const validation = validateForm(fieldData, fieldRules);

            setErrors(prev => ({
                ...prev,
                [field]: validation.errors[field] || ''
            }));

            return !validation.errors[field];
        }
    };
};
