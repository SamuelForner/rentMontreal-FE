import React from 'react';

import OwnerContext from '@/context/OwnerContext';

import ProfilePage from './profilepage';
import SignIn from './signin';

export default function Home() {
  const { ownerToken } = React.useContext(OwnerContext);

  return ownerToken ? <ProfilePage /> : <SignIn />;
}
