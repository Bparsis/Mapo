import React, { useContext } from 'react'
import { AppContext } from '../../../Utils/ContextProvider'
import TriggerTheme from '../../../Utils/TrigerTheme';


const TopBar = () => {
  const AppCtx = useContext(AppContext);
  const { user, translate } = {...AppCtx!};

  return (
    <div className="TopBar">
      {!user.isConnected &&
        <>
          <button value="LogIn" className="UserButton">{translate("LogIn")}</button>
          <button value="SignUp" className="UserButton">{translate("SignUp")}</button>
        </>
      }{user.isConnected &&
        <>
          <button value="Profile" className="UserButton">{translate("Profile")}</button>
          <button value="Disconnect" className="UserButton">{translate("Disconnect")}</button>
        </>
      }
      <TriggerTheme/>
    </div>
  )
}

export default TopBar