import { useContext } from "react";
import { AppContext } from "./ContextProvider";


const TriggerTheme = () => {

  const AppCtx = useContext(AppContext);
  const { theme, setTheme } = { ...AppCtx! };

  const switchTheme = () => {
    switch (theme) {
      case "Dark":
        setTheme("Light");
        console.log("Dark => Light")
        break;
      case "Light":
        setTheme("Dark");
        console.log("Light => Dark");
        break;
    }
  }

  return (
    <button value="theme" className="ThemeButton" onClick={switchTheme}>TriggerTheme</button>
  )
}

export default TriggerTheme;