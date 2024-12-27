export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  zipCode: string;
}
export interface IAuthResponse {
  user: IUser;
  jwt: string;
}

export interface ISignUp {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
