export interface IUser {
  firstName: string;
  lastName:  string;
  city:      string;
  email:     string;
  role:      'admin' | 'guest' | null;
}

export interface IUserRegister extends IUser {
  password: string;
}

export interface ILogin {
  email:    string;
  password: string;
}

export interface IResponseLogin {
  message: string;
  token:   string;
  user: IUser;
}