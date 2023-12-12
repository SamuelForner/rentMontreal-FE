import React from 'react';

import { PropertyInt } from '@/interfaces/property';

interface usePropertiesRessourceProps {
  filter?: { roomNumber: number | undefined };
}

export default function usePropertiesRessource(
  filter: usePropertiesRessourceProps
) {
  const [properties, setProperties] = React.useState<PropertyInt[]>();

  let queryParams = '';
  if (filter.filter?.roomNumber !== undefined) {
    queryParams = `?rooms=${filter.filter.roomNumber}`;
  }

  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:3000/properties/filter${queryParams}`)
      ).json();
      setProperties(data);
    };
    dataFetch();
  }, [queryParams]);

  return {
    properties,
  };
}
