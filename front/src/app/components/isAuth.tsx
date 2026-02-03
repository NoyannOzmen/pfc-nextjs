'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';

export function isFoster(Component: React.ComponentType) {
  return function IsFoster(props: React.ComponentProps<typeof Component>) {
    const auth = useUserContext();
    useEffect(() => {
      if (!auth.user?.accueillant) {
        return redirect('/');
      }
    }, []);
    if (!auth) {
      return null;
    }
    return <Component {...props} />;
  };
}

export function isShelter(Component: React.ComponentType) {
  return function IsShelter(props: React.ComponentProps<typeof Component>) {
    const auth = useUserContext();
    useEffect(() => {
      if (!auth.user?.refuge) {
        return redirect('/');
      }
    }, []);
    if (!auth) {
      return null;
    }
    return <Component {...props} />;
  };
}
