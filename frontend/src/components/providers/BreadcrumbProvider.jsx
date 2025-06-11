'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  const updateBreadcrumbs = useCallback((items) => {
    setBreadcrumbItems(prevItems => {
      // Only update if items are actually different
      if (JSON.stringify(prevItems) !== JSON.stringify(items)) {
        return items;
      }
      return prevItems;
    });
  }, []);

  const clearBreadcrumbs = useCallback(() => {
    setBreadcrumbItems([]);
  }, []);

  const contextValue = {
    breadcrumbItems,
    updateBreadcrumbs,
    clearBreadcrumbs
  };

  return (
    <BreadcrumbContext.Provider value={contextValue}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};
