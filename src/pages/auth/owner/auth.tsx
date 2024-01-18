'use client';
import { GetServerSideProps } from 'next';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/components/auth/owner/home';
import ProfilePage from '@/components/auth/owner/profilepage';
import Register from '@/components/auth/owner/register';
import SignIn from '@/components/auth/owner/signin';
import Header from '@/components/global/header';

export default function Ownerauth(path?: { resolvedUrl: string }) {
  const [ownerToken] = React.useState<string | null>(null);

  const isConnected =
    ownerToken !== undefined || ownerToken !== null ? true : false;

  return (
    <div>
      <Header path={path} isConnected={isConnected} />
      <BrowserRouter>
        <Routes>
          <Route path='/auth/owner/auth' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='register' element={<Register />} />
          <Route path='profilPage' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  return {
    props: {
      resolvedUrl,
    },
  };
};
