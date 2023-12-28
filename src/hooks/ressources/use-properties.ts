import qs from 'qs';
import querystring from 'querystring';
import React from 'react';

import { PropertyInt, PropertyType } from '@/interfaces/property';

interface usePropertiesRessourceProps {
  filters: {
    livingArea?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
    floorMin?: number | undefined;
    floorMax?: number | undefined;
  };
}

export default function usePropertiesRessource(
  filter: usePropertiesRessourceProps
) {
  const [properties, setProperties] = React.useState<PropertyInt[]>();

  const queryParams = {
    ...(filter.filters.livingArea && { livingArea: filter.filters.livingArea }),
    ...(filter.filters.propertyType && {
      type: `${filter.filters.propertyType}`,
    }),
    ...(filter.filters.surfaceAreaMin && {
      surfaceAreaMin: filter.filters.surfaceAreaMin,
    }),
    ...(filter.filters.surfaceAreaMax && {
      surfaceAreaMax: filter.filters.surfaceAreaMax,
    }),
    ...(filter.filters.isFurnished && {
      isFurnished: filter.filters.isFurnished,
    }),
    ...(filter.filters.floorMin !== undefined &&
      filter.filters.floorMin >= 0 && {
        floorMin: filter.filters.floorMin,
      }),
    ...(filter.filters.floorMax !== undefined &&
      filter.filters.floorMax >= 0 && {
        floorMax: filter.filters.floorMax,
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
