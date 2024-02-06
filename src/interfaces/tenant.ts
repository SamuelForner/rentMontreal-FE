export interface Itenant {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  comparePassword: (password: string) => Promise<boolean>;
}
