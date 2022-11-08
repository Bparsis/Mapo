import React, { useContext } from 'react'
import { AppContext } from '../../../Utils/ContextProvider'
import TriggerTheme from '../../../Utils/TrigerTheme';
import Login from '../../User/Login';
import Logout from '../../User/Logout';
import Signup from '../../User/Signup';


const TopBar = () => {
  const AppCtx = useContext(AppContext);
  const { user, translate } = {...AppCtx!};

  return (
    <div className="TopBar">
      {!user.isConnected &&
        <>
          <Login />
          <Signup />
        </>
      }{user.isConnected &&
        <>
          <button value="Profile" className="UserButton">{translate("Profile")}</button>
          <Logout />
        </>
      }
      <TriggerTheme/>
    </div>
  )
}

export default TopBar