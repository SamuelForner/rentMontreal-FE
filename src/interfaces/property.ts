export enum PropertyType {
  Apartment = 'Apartment',
  House = 'House',
}

export enum Accommodation {
  EntireApartment = 'EntireApartment',
  FlatShare = 'FlatShare',
}

export enum ActiveComponent {
  showOwnerProperty = 'showOwnerProperty',
  addOwnerProperty = 'addOwnerProperty',
  showOwnerSetting = 'showOwnerSetting',
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

export interface Filters {
  livingArea?: number | undefined;
  propertyType?: PropertyType | PropertyType[] | undefined;
  surfaceAreaMin?: number | undefined;
  surfaceAreaMax?: number | undefined;
  isFurnished?: boolean | undefined;
  floorMin?: number | undefined;
  floorMax?: number | undefined;
  accommodation?: Accommodation | undefined;
  priceMin?: number | undefined;
  priceMax?: number | undefined;
}
