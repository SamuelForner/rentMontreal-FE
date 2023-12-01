import React from 'react';

import { PropertyType } from '@/interfaces/property';

export default function usePropertiesRessource() {
  const [properties, setProperties] = React.useState<PropertyType[]>();
  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch('http://localhost:3000/properties/all')
      ).json();
      setProperties(data);
    };
    dataFetch();
  }, []);

  return {
    properties,
  };
}
