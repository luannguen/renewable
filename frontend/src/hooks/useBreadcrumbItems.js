'use client';

import { useEffect, useRef } from 'react';
import { useBreadcrumb } from '@/components/providers/BreadcrumbProvider';

export const useBreadcrumbItems = (items) => {
  const { updateBreadcrumbs } = useBreadcrumb();
  const prevItemsRef = useRef();
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Only update if items actually changed or it's the first time
    const itemsChanged = JSON.stringify(prevItemsRef.current) !== JSON.stringify(items);
    
    if ((itemsChanged || !isInitializedRef.current) && items && items.length > 0) {
      updateBreadcrumbs(items);
      prevItemsRef.current = items;
      isInitializedRef.current = true;
    }
  }, [items, updateBreadcrumbs]);
};
