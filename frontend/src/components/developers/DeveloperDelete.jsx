import { Modal } from "flowbite-react";
import { useContext } from "react";
import DeveloperContext from "../../Context/DeveloperContext";
import { TiWarningOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

export const DeveloperDelete = ({ show, onClose, developerId }) => {
  const { deleteDeveloper } = useContext(DeveloperContext);

  return (
    <>
      <Modal dismissible show={show} size="xl" onClose={onClose} popup>
        <Modal.Header className="delete-modal" />
        <Modal.Body className="delete-modal">
          <div className="delete-modal">
            <div className="delete-modal__icon">
              <IconContext.Provider value={{ size: "124px", color: "#ffff7f" }}>
                <TiWarningOutline />
              </IconContext.Provider>
            </div>
            <h3 className="delete-modal__message">
              Tem certeza que deseja deletar esse desenvolvedor?
            </h3>
            <div className="flex justify-center gap-2">
              <button
                className="delete-modal__button delete-modal__button--delete"
                onClick={() => deleteDeveloper(developerId)}
              >
                Deletar
              </button>
              <button className="delete-modal__button" onClick={onClose}>
                Cancelar
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
