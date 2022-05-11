export type User = {
  age: number;
  id: string;
  name: string;
  email: string;
  password?: string;
};

export type Lot = {
  name: string;
  price: number;
  step: number;
  image: string;
};
