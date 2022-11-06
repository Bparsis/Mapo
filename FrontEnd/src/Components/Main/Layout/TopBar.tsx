import React, { useContext } from 'react'
import IAppContext from '../../../Types/Interfaces/IAppContext';
import { AppContext } from '../../../Utils/ContextProvider'
import TriggerTheme from '../../../Utils/TrigerTheme';


const TopBar = () => {
  const AppCtx = useContext(AppContext);
  const { user, theme, setTheme } = {...AppCtx!};

  return (
    <div className="TopBar">
      {!user.isConnected &&
        <>
          <button value="LogIn" className="UserButton">LogIn</button>
          <button value="SignUp" className="UserButton">SignUp</button>
        </>
      }{user.isConnected &&
        <>
          <button value="Profile" className="UserButton">Profile</button>
          <button value="Disconnect" className="UserButton">Disconnect</button>
        </>
      }
      <TriggerTheme/>
    </div>
  )
}

export default TopBar