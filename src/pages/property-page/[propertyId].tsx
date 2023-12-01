import { useRouter } from 'next/router';

import { Header } from '@/components/global/header';
import Property from '@/components/property-page/property';

export default function PropertyPage() {
  const router = useRouter();

  const { propertyId } = router.query;

  if (!propertyId) {
    return <></>;
  } else {
    return (
      <>
        <Header />
        <Property propertyId={propertyId} />
      </>
    );
  }
}
