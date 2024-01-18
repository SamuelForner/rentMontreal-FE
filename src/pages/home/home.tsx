'use client';

import React from 'react';

import Header from '@/components/global/header';
import HomePageFilters from '@/components/home/homePageFilters';
import PropertyList from '@/components/home/propertyList';
import OwnerContext from '@/context/OwnerContext';
import { Filters } from '@/interfaces/property';

export default function Home() {
  const { ownerToken } = React.useContext(OwnerContext);
  const isConnected =
    ownerToken !== undefined || ownerToken !== null ? true : false;
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
    <div>
      <Header isConnected={isConnected} />
      <HomePageFilters onFiltersChange={handleFiltersChange} />
      <PropertyList filters={filters} />
    </div>
  );
}
