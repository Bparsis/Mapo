import { useContext } from "react";
import { AppContext } from "./ContextProvider";

const TriggerTheme = () => {
  const AppCtx = useContext(AppContext);
  const { theme, setTheme, setLang, translate } = { ...AppCtx! };

  const switchTheme = () => {
    switch (theme) {
      case "Dark":
        setTheme("Light");
        setLang("fr"); // ? Test pour les traduction
        break;
      case "Light":
        setTheme("Dark");
        setLang("gb"); // ? Test pour les traduction
        break;
    }
  }

  return (
    <button value="theme" className="ThemeButton" onClick={switchTheme}>{translate("TriggerTheme")}</button>
  )
}

export default TriggerTheme;