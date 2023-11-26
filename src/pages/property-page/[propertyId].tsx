import { useRouter } from 'next/router';

import { Header } from '@/components/global/header';
import Property from '@/components/property-page/property';

export default function PropertyPage() {
  const router = useRouter();

  const { propertyId } = router.query;

  return (
    <>
      <Header />
      <Property propertyId={propertyId} />
    </>
  );
}
