export enum PropertyType {
  Apartment = 'Apartment',
  House = 'House',
}

export interface PropertyInt {
  _id: string | string[] | undefined;
  title: string;
  type: PropertyType;
  rooms: number;
  surfaceArea: number;
  isFurnished: boolean;
  address: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  description: string;
  picture: string;
}
