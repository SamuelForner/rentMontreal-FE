'use client';

import PropertyList from '@/components/dashboard/Home/propertyList';
import { ResearchBar } from '@/components/dashboard/Home/researchBar';
import { Header } from '@/components/global/header';

export default function Home() {
  return (
    <>
      <Header />
      <ResearchBar />
      <PropertyList />
    </>
  );
}
