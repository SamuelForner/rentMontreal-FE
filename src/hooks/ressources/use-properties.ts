import qs from 'qs';
import querystring from 'querystring';
import React from 'react';

import { PropertyInt } from '@/interfaces/property';
import { Filters } from '@/pages/home/home';

export default function usePropertiesRessource(filters: Filters) {
  const [properties, setProperties] = React.useState<PropertyInt[]>();
  const queryParams = {
    ...(filters.livingArea && { livingArea: filters.livingArea }),
    ...(filters.propertyType && {
      type: filters.propertyType,
    }),
    ...(filters.surfaceAreaMin && {
      surfaceAreaMin: filters.surfaceAreaMin,
    }),
    ...(filters.surfaceAreaMax && {
      surfaceAreaMax: filters.surfaceAreaMax,
    }),
    ...(filters.isFurnished !== undefined && {
      isFurnished: filters.isFurnished,
    }),
    ...(filters.floorMin !== undefined &&
      filters.floorMin >= 0 && {
        floorMin: filters.floorMin,
      }),
    ...(filters.floorMax !== undefined &&
      filters.floorMax >= 0 && {
        floorMax: filters.floorMax,
      }),
    ...(filters.accommodation && {
      accommodation: filters.accommodation,
    }),
  };

  let formattedQueryParams = qs.stringify(queryParams, {
    addQueryPrefix: true,
  });

  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://localhost:3001/properties/filter${formattedQueryParams}`
        )
      ).json();
      setProperties(data);
    };
    dataFetch();
  }, [formattedQueryParams]);

  return {
    properties,
  };
}
