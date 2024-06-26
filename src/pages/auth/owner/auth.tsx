'use client';
import { GetServerSideProps } from 'next';
import React from 'react';

import Home from '@/components/auth/owner/home';
import Header from '@/components/global/header';
import OwnerContext from '@/context/OwnerContext';

export default function Ownerauth(path?: { resolvedUrl: string }) {
  const { ownerToken } = React.useContext(OwnerContext);
  const isConnected = ownerToken !== undefined && ownerToken !== null;

  return (
    <div>
      <Header path={path} isConnected={isConnected} />
      <Home />
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
