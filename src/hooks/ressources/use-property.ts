import React from 'react';

import { PropertyInt } from '@/interfaces/property';

export default function usePropertyRessource(propertyId: PropertyInt['_id']) {
  const [property, setProperty] = React.useState<PropertyInt>();
  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:3001/properties/${propertyId}`)
      ).json();
      setProperty(data);
    };
    dataFetch();
  }, [propertyId]);

  return {
    property,
  };
}
