import React from 'react';

import { PropertyType } from '@/interfaces/property';

export default function usePropertyRessource(propertyId: PropertyType['_id']) {
  const [propertyy, setProperty] = React.useState<PropertyType>();
  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:3000/properties/${propertyId}`)
      ).json();
      setProperty(data);
    };
    dataFetch();
  }, [propertyId]);

  return {
    propertyy,
  };
}
