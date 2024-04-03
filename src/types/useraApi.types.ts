export interface IUsers {
  id?: number;
  email: string;
  password: string;
  userName?: string;
}

export interface IResponse {
  accessToken: string;
  user: IUsers;
}
