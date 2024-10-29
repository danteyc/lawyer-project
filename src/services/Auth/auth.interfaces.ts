export interface IUser {
  firstName: string;
  lastName:  string;
  city:      string;
  email:     string;
  password:  string;
  role:      'admin' | 'guest';
}

export interface ILogin {
  email:    string;
  password: string;
}

export interface IResponseLogin {
  message: string;
  token:   string;
}