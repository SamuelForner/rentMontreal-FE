'use client';

import React from 'react';

import Header from '@/components/global/header';
import HomePageFilters from '@/components/home/homePageFilters';
import PropertyList from '@/components/home/propertyList';
import { Accommodation, PropertyType } from '@/interfaces/property';

export interface Filters {
  livingArea?: number | undefined;
  propertyType?: PropertyType | PropertyType[] | undefined;
  surfaceAreaMin?: number | undefined;
  surfaceAreaMax?: number | undefined;
  isFurnished?: boolean | undefined;
  floorMin?: number | undefined;
  floorMax?: number | undefined;
  accommodation?: Accommodation | undefined;
  priceMin?: number | undefined;
  priceMax?: number | undefined;
}

export default function Home() {
  const [filters, setFilters] = React.useState<Filters>({
    livingArea: undefined,
    propertyType: undefined,
    surfaceAreaMax: undefined,
    surfaceAreaMin: undefined,
    isFurnished: undefined,
    floorMin: undefined,
    floorMax: undefined,
    accommodation: undefined,
    priceMin: undefined,
    priceMax: undefined,
  });

  const handleFiltersChange = (newFilter: Filters) => {
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
