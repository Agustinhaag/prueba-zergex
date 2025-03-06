export interface IUser {
  email: string;
  id: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
  url: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  url: string;
}

export interface LoginResponse {
  email: string;
  name: string;
  id: string;
  token: string;
}

export interface Coins {
  id:string;
  name: string;
  ticker: string;
  price: string;
  amount: string;
}
