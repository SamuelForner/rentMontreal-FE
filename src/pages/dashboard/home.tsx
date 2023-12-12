'use client';

import React from 'react';

import PropertyList from '@/components/dashboard/Home/propertyList';
import { ResearchBar } from '@/components/dashboard/Home/researchBar';
import { Header } from '@/components/global/header';

export default function Home() {
  const [filter, setFilter] = React.useState<{
    roomNumber: number | undefined;
  }>({ roomNumber: undefined });

  const handleFilterChange = (newFilter: {
    roomNumber: number | undefined;
  }) => {
    setFilter(newFilter);
  };

  return (
    <>
      <Header />
      <ResearchBar onFilterChange={handleFilterChange} />
      <PropertyList filter={filter} />
    </>
  );
}
