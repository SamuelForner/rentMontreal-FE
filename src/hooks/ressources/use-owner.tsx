import React from 'react';

import { Iowner } from '@/interfaces/owner';

export default function useOwnerInfo() {
  const [ownerInfo, setOwnerInfo] = React.useState<Iowner>();
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const getOwnerCredential = async () => {
      try {
        let token = localStorage.getItem('auth-token');
        if (token) {
          const response = await (
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/owners`, {
              method: 'GET',
              headers: { 'x-auth-token': token },
            })
          ).json();
          setOwnerInfo(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching owner info:', error);
        setIsLoading(false);
      }
    };
    getOwnerCredential();
  }, []);
  return {
    ownerInfo,
    isLoading,
  };
}
