import React, { useContext } from 'react'
import useModal from '../../Utils/Hooks/useModal';
import { AppContext } from '../../Utils/ContextProvider';

const Logout = () => {
  const AppCtx = useContext(AppContext);
  const {translate, setConnected} = {...AppCtx!}
  const { openModal, Modal, closeModal } = useModal();

  const log = () => {
    setConnected(false);
    closeModal();
  }

  return (
    <>
      <button onClick={openModal} className="UserButton">{translate("Logout")}</button>
      <Modal title={translate("Logout")}>
        <button type="button" onClick={log}>Logout-ez-vous</button>
      </Modal>
    </>
  )
}

export default Logout