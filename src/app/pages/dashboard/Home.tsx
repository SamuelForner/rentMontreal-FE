import { Header } from '@/components/dashboard/Home/header';
import PropertyList from '@/components/dashboard/Home/propertyList';
import { ResearchBar } from '@/components/dashboard/Home/researchBar';

export default function Home() {
  return (
    <>
      <Header />
      <ResearchBar />
      <PropertyList />
    </>
  );
}
