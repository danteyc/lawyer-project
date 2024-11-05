
import { IUser as IUserBase } from '../../services/Auth/auth.interfaces';

// }

interface IUser extends IUserBase {
  createdAt: string;
  updatedAt: string;
  id: number | null;
}

export interface UserState{
  user: IUser,
  isAuthenticated: boolean,
}

export interface Actions {
  setUser: (user: IUser) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
}
