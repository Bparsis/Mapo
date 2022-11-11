import React, { useContext } from 'react'
import useModal from '../../Utils/Hooks/useModal';
import { AppContext } from '../../Utils/ContextProvider';

const Login = () => {
  const AppCtx = useContext(AppContext);
  const {translate, setConnected} = {...AppCtx!}
  const { openModal, Modal, closeModal } = useModal();

  const log = () => {
    setConnected(true);
    closeModal();
  }

  return (
    <>
      <button onClick={openModal} className="UserButton">{translate("Login")}</button>
      <Modal title={translate("Login")}>
        <button type="button" onClick={log}>Login-ez-vous</button>
      </Modal>
    </>
  )
}

export default Login