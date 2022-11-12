import React, { useContext } from 'react'
import useModal from '../../Utils/Hooks/useModal';
import { AppContext } from '../../Utils/ContextProvider';
import LoginForm from "./LoginForm";

const Login = () => {
  const AppCtx = useContext(AppContext);
  const {translate} = {...AppCtx!}
  const { openModal, Modal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal} className="UserButton">{translate("Login")}</button>
      <Modal title={translate("Login")}>
        <LoginForm closeModal={closeModal}/>
      </Modal>
    </>
  )
}

export default Login