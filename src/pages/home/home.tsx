'use client';

import React from 'react';

import Header from '@/components/global/header';
import PropertyList from '@/components/home/propertyList';
import { ResearchBar } from '@/components/home/researchBar';
import { PropertyType } from '@/interfaces/property';

export default function Home() {
  const [filters, setFilters] = React.useState<{
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
  }>({
    roomNumber: undefined,
    propertyType: undefined,
    surfaceAreaMax: undefined,
    surfaceAreaMin: undefined,
    isFurnished: undefined,
  });

  const handleFiltersChange = (newFilter: {
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
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
