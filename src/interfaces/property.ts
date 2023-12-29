export enum PropertyType {
  Apartment = 'Apartment',
  House = 'House',
}

export enum Accommodation {
  EntireApartment = 'EntireApartment',
  FlatShare = 'FlatShare',
}

export interface PropertyInt {
  _id: string | string[] | undefined;
  title: string;
  type: PropertyType;
  livingArea: number;
  surfaceArea: number;
  isFurnished: boolean;
  address: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  floor: number;
  price: number;
  isChargesIncluded: boolean;
  accommodation: Accommodation;
  description: string;
  picture: string;
}
