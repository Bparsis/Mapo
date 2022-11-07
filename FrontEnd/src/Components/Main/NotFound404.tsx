import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { AppContext } from '../../Utils/ContextProvider'

const NotFound404 = () => {
  const AppCtx = useContext(AppContext)
  const {translate} = {...AppCtx!}
  return (
    <>
      <div>{translate("NotFound404")}</div>
      <Link to="/">{translate("Home")}</Link>
    </>
  )
}

export default NotFound404