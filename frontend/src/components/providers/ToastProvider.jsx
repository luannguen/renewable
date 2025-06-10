'use client';
import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const Toast = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in`}>
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-200 font-bold"
      >
        ×
      </button>
    </div>
  );
};

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const toast = {
    success: (message) => showToast(message, 'success'),
    error: (message) => showToast(message, 'error')
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toasts.map(toastItem => (
        <Toast 
          key={toastItem.id} 
          message={toastItem.message} 
          type={toastItem.type}
          onClose={() => removeToast(toastItem.id)}
        />
      ))}
    </ToastContext.Provider>
  );
}
