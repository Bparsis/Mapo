import { Dispatch, SetStateAction } from "react";
import keyLangType from "../Types/keyLangType";
import IUser from "./IUser";

export default interface IAppContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  setLang: Dispatch<SetStateAction<keyLangType>>;
  translate: (text: string) => string;
}