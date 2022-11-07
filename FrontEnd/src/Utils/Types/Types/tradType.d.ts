import keyLangType from "./keyLangType";

type tradType = { [key in keyLangType]: { [key in string]: string } };

export default tradType;