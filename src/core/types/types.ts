export interface ADressUser {
  street: string;
  suite: string;
  city: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: ADressUser;
}
