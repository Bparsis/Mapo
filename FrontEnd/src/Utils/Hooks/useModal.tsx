import { ReactNode, useRef } from "react";

export default function useModal() {
  const modal = useRef<HTMLDivElement>(null);

  const openModal = () => {
    modal.current!.style.display = "block";
  }

  const closeModal = () => {
    modal.current!.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal.current!) {
      closeModal();
    }
  }

  const Modal = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className="modal" ref={modal}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{title}</h2>
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
    )
  }
  return { openModal, closeModal, Modal,  }
}