const checkUserName = (userName: string): boolean => {
  const regExp = new RegExp(/^[\w-]{3,}$/)
  if (!(regExp.test(userName) && typeof userName === "string")){
    return true;
  };
  return false;
}
const checkPassword = (password: string): boolean => {
  const regExp = new RegExp(/^((?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[0-9])(?=\S*?[@!_)(:;~\[\]\-\\\/]).{6,})$/)
  if (!(regExp.test(password) && typeof password === "string")){
    return true;
  };
  return false;
}
const checkPhone = (phone: string): boolean => {
  const regExp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
  if (!(regExp.test(phone) && typeof phone === "string")){
    return true;
  };
  return false;
}
const checkMail = (mail: string): boolean => {
  const regExp = new RegExp(/.*/)
  if (!(regExp.test(mail) && typeof mail === "string")){
    return true;
  };
  return false;
}
const checkLat = (lat: number): boolean => {
  if (!(typeof lat === "number")){
    return true;
  };
  return false;
}
const checkLong = (long: number): boolean => {
  if (!(typeof long === "number")){
    return true;
  };
  return false;
}

const VerifUser = (User: TUser) => {
  var error = false;
  var errorFlag: Array<{flag: string, message: string}> = [];

  if(checkUserName(User.userName)){
    error = true;
    errorFlag.push({flag: "name", message: "Nickname Invalid"});
  };
  if(checkPassword(User.password)){
    error = true;
    errorFlag.push({flag: "password", message: ""});
  };
  if(checkLat(User.lat)){
    error = true;
    errorFlag.push({flag: "lat", message: ""});
  };
  if(checkLong(User.long)){
    error = true;
    errorFlag.push({flag: "long", message: ""});
  };
  if (User.phone){
    if(checkPhone(User.phone)){
      error = true;
      errorFlag.push({flag: "phone", message: ""});
    };
  }
  if (User.mail){
    if(checkMail(User.mail)){
      error = true;
      errorFlag.push({flag: "mail", message: "" });
    };
  }
  return {error: error, list: errorFlag};
}

export default VerifUser;