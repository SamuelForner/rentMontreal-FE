import qs from 'qs';
import querystring from 'querystring';
import React from 'react';

import { PropertyInt } from '@/interfaces/property';
import { Filters } from '@/pages/home/home';

export default function usePropertiesRessource(filters: Filters) {
  const [properties, setProperties] = React.useState<PropertyInt[]>();

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(null);

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
    ...(filters.priceMin !== undefined && {
      priceMin: filters.priceMin,
    }),
    ...(filters.priceMax !== undefined && {
      priceMax: filters.priceMax,
    }),
  };

  let formattedQueryParams = qs.stringify(queryParams, {
    addQueryPrefix: true,
  });

  React.useEffect(() => {
    fetch(`http://localhost:3001/properties/filter${formattedQueryParams}`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, [formattedQueryParams]);

  return {
    properties,
    loading,
    error,
  };
}
