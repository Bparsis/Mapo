import { Dispatch, SetStateAction } from "react";
import TKeyLang from "../Types/TKeyLang";
import IUser from "./IUser";

export default interface IAppContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  setLang: Dispatch<SetStateAction<TKeyLang>>;
  translate: (text: string) => string;
}