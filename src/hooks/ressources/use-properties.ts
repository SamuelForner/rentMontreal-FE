import qs from 'qs';
import querystring from 'querystring';
import React from 'react';

import { PropertyInt, PropertyType } from '@/interfaces/property';

interface usePropertiesRessourceProps {
  filters: {
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
  };
}

export default function usePropertiesRessource(
  filter: usePropertiesRessourceProps
) {
  const [properties, setProperties] = React.useState<PropertyInt[]>();

  const queryParams = {
    ...(filter.filters.roomNumber && { rooms: `${filter.filters.roomNumber}` }),
    ...(filter.filters.propertyType && {
      type: `${filter.filters.propertyType}`,
    }),
  };

  let formattedQueryParams = qs.stringify(queryParams, {
    addQueryPrefix: true,
  });

  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://localhost:3000/properties/filter${formattedQueryParams}`
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
