// import { Dispatch, SetStateAction } from "react";
// import TKeyLang from "../Types/TKeyLang";
// import IUser from "./IUser";

export default interface IAppContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
  setLang: Dispatch<SetStateAction<TKeyLang>>;
  translate: (text: string) => string;
}