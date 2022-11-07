import React, { useContext } from 'react'
import { AppContext } from '../../Utils/ContextProvider';

const Home = () => {
  const AppCtx = useContext(AppContext); 
  const {translate} = {...AppCtx!}
  return (
    <div>{translate("Home")}</div>
  )
}

export default Home