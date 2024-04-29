import React from 'react';

import { PropertyInt } from '@/interfaces/property';

export default function useOwnerProperties(ownerId: string | null) {
  const [properties, setProperties] = React.useState<PropertyInt[]>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/properties/ownerId`,
          {
            body: ownerId,
            method: 'GET',
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  return { properties, loading, error };
}
