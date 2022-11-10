import React, { useContext } from 'react'
import useModal from '../../Utils/Hooks/useModal';
import { AppContext } from '../../Utils/ContextProvider';
import SignupForm from './SignupForm';

const Signup = () => {
  const AppCtx = useContext(AppContext);
  const {translate} = {...AppCtx!}
  const { openModal, Modal } = useModal();
  return (
    <>
      <button onClick={openModal} className="UserButton">{translate("Signup")}</button>
      <Modal title={translate("Signup")}>
        <SignupForm />
      </Modal>
    </>
  )
}

export default Signup