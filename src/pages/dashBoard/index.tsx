import { useCallback, useEffect, useState } from "react";
import { Form } from "../../components/Form";
import { Modal } from "../../components/Modal/index";
import { SideBar } from "../../components/SideBar";

import { TableUser } from "../../components/TableUser";

import "./style.scss";

export function DashBoard() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const onClose = () => {
    setIsModalVisible(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isModalVisible) {
        setIsModalVisible(false);
      }
    },
    [setIsModalVisible, isModalVisible]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div id="dash-board">
      <header>
        <h1>Technical Challenge</h1>
        <h3>Front-End Software Engineer</h3>
      </header>

      <main>
        <SideBar openModal={openModal} />

        <div className="dash-table-users">
          {!isModalVisible ? <TableUser isVisible={isModalVisible} /> : <></>}
        </div>

        <Modal isVisible={isModalVisible} onClose={onClose}>
          <Form />
        </Modal>
      </main>
    </div>
  );
}
