'use client';
import { useRouter } from 'next/router';

import Header from '@/components/global/header';
import Property from '@/components/property-page/property';

export default function PropertyPage() {
  const router = useRouter();
  // const params = useParams<{ tag: string; item: string }>();
  // console.log(params);
  const { propertyId } = router.query;

  if (!propertyId) {
    return <></>;
  }
  return (
    <>
      <Header />
      <Property propertyId={propertyId} />
    </>
  );
}
