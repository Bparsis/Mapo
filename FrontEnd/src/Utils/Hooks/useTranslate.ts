import { useEffect, useState } from "react";
import TKeyLang from "../Types/Types/TKeyLang";
import Trad from "../Trad/Trad";


export default function useTranslate () {

  const [lang, setLang] = useState<TKeyLang>("fr");
  const [trad, setTrad] = useState(Trad[lang]);
  
  useEffect(() => {
    setTrad(Trad[lang]);
  }, [lang])
  
  const translate = (text: string) => {
    return (trad[text] === undefined) ? "NF "+text+" NF" : trad[text];
  }

  return {setLang, translate}
}