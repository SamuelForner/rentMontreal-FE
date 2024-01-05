import { GetServerSideProps } from 'next';

import Header from '@/components/global/header';
import Property from '@/components/property-page/property';
import { PropertyInt } from '@/interfaces/property';

interface PropertyPageProps {
  property: PropertyInt;
  resolvedUrl: string;
}

export default function PropertyPage({
  property,
  resolvedUrl,
}: PropertyPageProps) {
  return (
    <div>
      <Header path={resolvedUrl} />
      <Property property={property} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  resolvedUrl,
}) => {
  const res = await fetch(
    `http://localhost:3001/properties/${query.propertyId}`
  );
  const property = await res.json();
  return {
    props: {
      property,
      resolvedUrl,
    },
  };
};
