'use client';

import React from 'react';

import PropertyList from '@/components/dashboard/Home/propertyList';
import { ResearchBar } from '@/components/dashboard/Home/researchBar';
import { Header } from '@/components/global/header';
import { PropertyType } from '@/interfaces/property';

export default function Home() {
  const [filters, setFilters] = React.useState<{
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
  }>({ roomNumber: undefined, propertyType: undefined });

  const handleFiltersChange = (newFilter: {
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
  }) => {
    setFilters((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  return (
    <>
      <Header />
      <ResearchBar onFiltersChange={handleFiltersChange} />
      <PropertyList filters={filters} />
    </>
  );
}
