'use client';
import { redirect } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';

export function isFoster(Component: React.ComponentType) {
  return function IsFoster(props: React.ComponentProps<typeof Component>) {
    const auth = useUserContext();
    if (!auth.user?.accueillant || !auth) {
        return redirect('/');
    }
    return <Component {...props} />;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isShelter(Component: React.ComponentType<any>) {
  return function IsShelter(props: React.ComponentProps<typeof Component>) {
    const auth = useUserContext();
    if (!auth.user?.refuge || !auth) {
          return redirect('/');
    }
    return <Component {...props} />;
  };
}
