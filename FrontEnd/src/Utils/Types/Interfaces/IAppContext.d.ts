// import { Dispatch, SetStateAction } from "react";
// import TKeyLang from "../Types/TKeyLang";
// import IUser from "./IUser";

import { Dispatch } from "react";

export default interface IAppContext {
  connected: boolean;
  setConnected: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
  setLang: Dispatch<SetStateAction<TKeyLang>>;
  translate: (text: string) => string;
}