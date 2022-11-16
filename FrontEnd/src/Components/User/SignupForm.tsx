import React, { useContext, useEffect, useState } from 'react';
import AddressInput from './AddressInput'
import useDB from "../../Utils/Hooks/useDb";
import IUser from '../../Utils/Types/Interfaces/IUser';
import Loading from '../../Utils/Loading';
import { AppContext } from '../../Utils/ContextProvider';

const SignupForm = ({ closeModal }: { closeModal: () => void }) => {
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
    const password = e.target["password"].value;
    const Cpassword = e.target["Cpassword"].value;
    if (password !== Cpassword) {
      console.table([password, Cpassword]);
      console.log("pwd !=");
      return;
    }
    var User: IUser = {
      userName: e.target["userName"].value,
      password: password,
      role: "user",
      long: Number(e.target["coords"].value.split(",")[0]),
      lat: Number(e.target["coords"].value.split(",")[1]),
      transport: e.target["transport"].value
    }
    if (e.target["mail"].value) {
      User.mail = e.target["mail"].value;
    }
    if (e.target["phone"].value) {
      User.phone = e.target["phone"].value;
    }
    dBComm("Mapo", "user", User, "/db/createUser");
  };

  if (loading) { return <Loading /> }

  return (
    <form autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="UserName">
        <label htmlFor="userName">
          <span>{translate("userName")}</span><br />
          <input type="text" name="userName" id="userName" placeholder={translate("userName")} pattern="^[\w-]{3,}$" required /><br />
          <span>{printError("name")}</span>
        </label>
      </fieldset>
      <fieldset className="PassWord">
        <label htmlFor="password">
          <span>{translate("password")}</span><br />
          <input type="password" name="password" id="password" placeholder={translate("password")} pattern="^((?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[0-9])(?=\S*?[@!_)(:;~\[\]\-\\\/]).{6,})$" required />
        </label>
        <br />
        <label htmlFor="Cpassword">
          <span>{translate("Cpassword")}</span><br />
          <input type="password" name="Cpassword" id="Cpassword" placeholder={translate("Cpassword")} pattern="^((?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[0-9])(?=\S*?[@!_)(:;~\[\]\-\\\/]).{6,})$" required />
        </label>
      </fieldset>
      <fieldset className="Contact">
        <label htmlFor="mail">
          <span>{translate("mail")}</span><br />
          <input type="email" name="mail" id="mail" placeholder={translate("mail")} />
        </label>
        <br />
        <label htmlFor="phone">
          <span>{translate("phone")}</span><br />
          <input type="tel" name="phone" id="phone" placeholder={translate("phone")} pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" />
        </label>
      </fieldset>
      <fieldset className="Address">
        <label htmlFor="address">
          <span>{translate("address")}</span><br />
          <AddressInput />
        </label>
      </fieldset>
      <fieldset className="Transport">
        <label htmlFor="transport">
          <span>{translate("transport")}</span><br />
          <select name="transport" id="transport">
            <option value="driving">{translate("Driving")}</option>
            <option value="cycling">{translate("Cycling")}</option>
            <option value="walking">{translate("Walking")}</option>
          </select>
        </label>
      </fieldset>
      <fieldset className="Submit">
        <button type="submit">{translate("submit")}</button>
      </fieldset>
    </form>
  )
}

export default SignupForm
