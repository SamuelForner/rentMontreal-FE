import { PropertyInt } from '@/interfaces/property';
import { getOwnerIdFromLocalStorage } from '@/utils/localstorage';

export default async function createProperty(data: PropertyInt) {
  const ownerId = getOwnerIdFromLocalStorage();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/properties/add`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          type: data.type,
          livingArea: data.livingArea,
          surfaceArea: data.surfaceArea,
          isFurnished: data.isFurnished,
          address: data.address,
          floor: data.floor,
          price: data.price,
          isChargesIncluded: data.isChargesIncluded,
          accommodation: data.accommodation,
          description: data.description,
          picture: data.picture,
          ownerId: ownerId,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la création de la propriété. Statut de la réponse : ${response.status}, Message : ${response.statusText}`
      );
    }
    const property = await response.json();
    return property;
  } catch (error) {
    console.error(error);
  }
}
