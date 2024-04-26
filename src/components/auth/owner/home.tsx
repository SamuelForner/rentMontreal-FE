import { useRouter } from 'next/router';
import React from 'react';

import OwnerContext from '@/context/OwnerContext';

import SignIn from './signin';

export default function Home() {
  const { ownerToken } = React.useContext(OwnerContext);
  const router = useRouter();
  React.useEffect(() => {
    if (ownerToken) {
      router.push('/dashboard/owner');
    }
  }, [ownerToken, router]);

  if (!ownerToken) return <SignIn />;
  return null;
  // return ownerToken ? <ProfilePage /> : <SignIn />;
}
