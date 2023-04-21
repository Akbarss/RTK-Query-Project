interface Address {
  street: string;
  zipcode: string;
  city: string;
}

export interface Iusers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
}
