import { GetServerSideProps } from 'next';
import React from 'react';

import Dashboard from '@/components/dashboard/owner/dashboard';
import ProfilePage from '@/components/dashboard/owner/profilepage';
import Header from '@/components/global/header';
import OwnerContext from '@/context/OwnerContext';

export default function ProfilPage(path: { resolvedUrl: string }) {
  const { ownerToken } = React.useContext(OwnerContext);

  const isConnected =
    ownerToken !== undefined || ownerToken !== null ? true : false;
  return (
    <div>
      <Header isConnected={isConnected} path={path} />
      <Dashboard />
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
