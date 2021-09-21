import { PropsWithChildren } from "react";

import "./styles.scss";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const Modal = ({ 
  isVisible,
  onClose,
  children,
}: PropsWithChildren<Props>) => {
  if (!isVisible) return <></>;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className={`modal ${isVisible ? "showModal" : ""}`}>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};
