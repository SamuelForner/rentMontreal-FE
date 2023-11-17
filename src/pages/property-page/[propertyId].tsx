import { useRouter } from 'next/router';

import { Header } from '@/components/global/header';
import Property from '@/components/property-page/property';

export default function PropertyPage() {
  const router = useRouter();
  console.log('router.QUER', router.query);
  const { id } = router.query;
  console.log(...id);

  return (
    <>
      <Header />
      <Property />
    </>
  );
}
