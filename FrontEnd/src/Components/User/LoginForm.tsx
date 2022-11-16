import React, { useContext, useEffect, useState } from 'react';
import useDB from "../../Utils/Hooks/useDb";
import Loading from '../../Utils/Loading';
import { AppContext } from '../../Utils/ContextProvider';

const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
  const { data, loading, dBComm } = useDB();

  const [formErrors, setFormErrors] = useState([]);

  const AppCtx = useContext(AppContext);
  const { setConnected, setUser, translate } = { ...AppCtx! }

  useEffect(() => {
    if (!loading && Object.keys(data).length !== 0) {
      handledbResponse();
    }
  // eslint-disable-next-line
  }, [data, loading]);

  const handledbResponse = () => {
    if (!data["error"]) {
      setConnected(true);
      setUser(data["user"]);
      closeModal();
      setFormErrors([]);
    } else {
      setFormErrors(data["list"]);
    }
  }

  const printError = (flag: string): string => {
    let msg: string;
    formErrors.forEach((error)=>{
      if (error.flag === flag){
        msg = error.message;
      }
    })
    return msg;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var User: TLoginUser = {
      login: e.target["login"].value,
      password: e.target["passwordLogin"].value
    }
    dBComm("Mapo", "user", User, "/db/login");
  };

  if (loading) { return <Loading /> }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="login">
        <label htmlFor="login">
          <span>{translate("userName or email")} </span><br />
          <input type="text" name="login" id="login" placeholder={translate("userName or email")} required /><br />
          <span>{printError("login")}</span>
        </label>
      </fieldset>
      <fieldset className="PassWord">
        <label htmlFor="passwordLogin">
          <span>{translate("password")}</span><br />
          <input type="password" name="passwordLogin" id="passwordLogin" placeholder={translate("password")} required />
        </label>
      </fieldset>
      <fieldset className="Submit">
        <button type="submit">{translate("submit")}</button>
      </fieldset>
    </form>
  )
}

export default LoginForm
