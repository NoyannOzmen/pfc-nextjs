'use client';

import UserContextProvider from '@/contexts/UserContext';
import RootContextProvider from '@/contexts/RootContext';

export function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserContextProvider>
      <RootContextProvider>{children}</RootContextProvider>
    </UserContextProvider>
  );
}