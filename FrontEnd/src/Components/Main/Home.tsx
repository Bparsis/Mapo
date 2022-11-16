import React, { useContext } from 'react'
import { AppContext } from '../../Utils/ContextProvider';
import PrintedMap from '../../Utils/Map';

const Home = () => {
  const AppCtx = useContext(AppContext);
  const { translate } = { ...AppCtx! }
  return (
    <>
      <div>{translate("Home")}</div>
      <PrintedMap />
    </>
  )
}

export default Home