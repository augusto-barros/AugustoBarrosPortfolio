'use client';

import { useEffect } from 'react';

export function ContactRedirect() {
  useEffect(() => {
    window.location.replace('/#contact');
  }, []);

  return null;
}
