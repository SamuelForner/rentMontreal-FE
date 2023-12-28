'use client';

import React from 'react';

import Header from '@/components/global/header';
import HomePageFilters from '@/components/home/homePageFilters';
import PropertyList from '@/components/home/propertyList';
import { PropertyType } from '@/interfaces/property';

export default function Home() {
  const [filters, setFilters] = React.useState<{
    livingArea?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
    floorMin?: number | undefined;
    floorMax?: number | undefined;
  }>({
    livingArea: undefined,
    propertyType: undefined,
    surfaceAreaMax: undefined,
    surfaceAreaMin: undefined,
    isFurnished: undefined,
    floorMin: undefined,
    floorMax: undefined,
  });

  const handleFiltersChange = (newFilter: {
    livingArea?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
    floorMin?: number | undefined;
    floorMax?: number | undefined;
  }) => {
    setFilters((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  return (
    <>
      <Header />
      <HomePageFilters onFiltersChange={handleFiltersChange} />
      <PropertyList filters={filters} />
    </>
  );
}
