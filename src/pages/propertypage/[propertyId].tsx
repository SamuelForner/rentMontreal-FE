import { GetServerSideProps } from 'next';
import React from 'react';

import Header from '@/components/global/header';
import Property from '@/components/property-page/property';
import OwnerContext from '@/context/OwnerContext';
import { PropertyInt } from '@/interfaces/property';

interface PropertyPageProps {
  property: PropertyInt;
  resolvedUrl: { resolvedUrl: string };
}

export default function PropertyPage({
  property,
  resolvedUrl,
}: PropertyPageProps) {
  const { ownerToken } = React.useContext(OwnerContext);
  const isConnected =
    ownerToken !== undefined || ownerToken !== null ? true : false;
  return (
    <div>
      <Header path={resolvedUrl} isConnected={isConnected} />
      <Property property={property} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  resolvedUrl,
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/properties/${query.propertyId}`
  );
  const property = await res.json();
  return {
    props: {
      property,
      resolvedUrl,
    },
  };
};
