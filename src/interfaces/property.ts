export interface Property {
  title: string;
  type: string;
  rooms: number;
  surfaceArea: string;
  address: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  description: string;
  picture: string;
}
