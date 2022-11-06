import { Dispatch, SetStateAction } from "react";
import IUser from "./IUser";

export default interface IAppContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}