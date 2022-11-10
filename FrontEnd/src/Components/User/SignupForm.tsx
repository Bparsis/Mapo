import React from 'react';
import { FormEvent } from 'react';
import AddressInput from './AddressInput'

interface TUser {
  userName: string;
  password: string;
  mail?: string;
  phone?: string;
  long: number;
  lat: number;
  transport: string;
}

const SignupForm = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = e.target[0].value;
    const Cpassword = e.target["Cpassword"].value;
    if (password !== Cpassword) {
      console.log("error");
      return;
    }
    var User: TUser = {
      userName: e.target["userName"].value,
      password: password,
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
    console.table(User);
  };
  return (
    <form autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="UserName">
        <label htmlFor="userName">
          <span>userName : </span>
          <input type="text" name="userName" id="userName" placeholder="userName" pattern="^[\w-]{3,}$" required />
        </label>
      </fieldset>
      <fieldset className="PassWord">
        <label htmlFor="password">
          <span>password : </span>
          <input type="password" name="password" id="password" placeholder="password" pattern="^((?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[0-9])(?=\S*?[@!_)(:;~\[\]\-\\\/]).{6,})$" required />
        </label>
        <br />
        <label htmlFor="Cpassword">
          <span>Cpassword : </span>
          <input type="password" name="Cpassword" id="Cpassword" placeholder="Cpassword" pattern="^((?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[0-9])(?=\S*?[@!_)(:;~\[\]\-\\\/]).{6,})$" required />
        </label>
      </fieldset>
      <fieldset className="Contact">
        <label htmlFor="mail">
          <span>mail : </span>
          <input type="email" name="mail" id="mail" placeholder="mail" />
        </label>
        <br />
        <label htmlFor="phone">
          <span>phone : </span>
          <input type="tel" name="phone" id="phone" placeholder="phone" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" />
        </label>
      </fieldset>
      <fieldset className="Address">
        <label htmlFor="address">
          <span>address : </span>
          <AddressInput />
        </label>
      </fieldset>
      <fieldset className="Transport">
        <label htmlFor="transport">
          <span>transport : </span>
          <select name="transport" id="transport">
            <option value="driving">Driving</option>
            <option value="cycling">Cycling</option>
            <option value="walking">Walking</option>
          </select>
        </label>
      </fieldset>
      <fieldset className="Submit">
        <button type="submit">submit</button>
      </fieldset>
    </form>
  )
}

export default SignupForm
