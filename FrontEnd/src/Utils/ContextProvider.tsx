import React, {
  createContext,
  ReactNode,
  useState,
} from "react";
import IAppContext from "../Types/Interfaces/IAppContext";
import IUser from "../Types/Interfaces/IUser";
// import Loading from "../components/Loading";
// import useDb from "./Hooks/useDb";
import useTranslate from "./Hooks/useTranslate";
const AppContext = createContext<IAppContext | null>(null);

interface IContextProvider {
  children: ReactNode
}

const ContexProvider = ({ children }: IContextProvider) => {

  // useEffect(() => {
  //   var gotUser: string | null = localStorage.getItem("user");
  //   if (gotUser !== null) {
  //     var userInit: IUser = JSON.parse(gotUser);
  //     if (userInit.nickname !== undefined && userInit.token !== undefined) {
  //       const authUser = {
  //         nickname: userInit.nickname,
  //         token: userInit.token,
  //       }
  //       dbComm("COARD", "User", { user: authUser }, "/api/tokenAuth");
  //     }
  //   }
  // }, [])

  // const { loading, data, error, dbComm } = useDb("", "", {}, "/init");

  // useEffect(() => {
  //   if (!loading) {
  //     handleDBResponse(data)
  //   }
  // }, [data, loading])

  // const handleDBResponse = (data) => {
  //   if (data.error === false) {
  //     let { nickname, token, role } = data.result;
  //     setUser({ isConnected: true, nickname: nickname, role: role, token: token });
  //   }
  // }
  // if (loading) { return <Loading /> }



  const [user, setUser] = useState<IUser>({ isConnected: true });
  const [theme, setTheme] = useState<string>("Light");
  const {setLang, translate} = useTranslate();

  // useEffect(() => {
  //   user.isConnected
  //     ? localStorage.setItem("MapoUser", JSON.stringify(user))
  //     : localStorage.removeItem("MapoUser");
  // }, [user])

  const AppContextContent: IAppContext = {
    user,
    setUser,
    theme,
    setTheme,
    setLang,
    translate,
  };

  return (
    <AppContext.Provider value={AppContextContent}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default ContexProvider;