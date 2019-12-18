export interface IEnvironment {
  name: string;
  password: string;
  username: string;
}

export interface IEnvironmentsResponse {
  results: IEnvironment[];
}
