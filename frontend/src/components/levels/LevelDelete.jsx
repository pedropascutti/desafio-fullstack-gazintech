import { Modal } from "flowbite-react";
import { useContext } from "react";
import LevelContext from "../../Context/LevelContext";
import { TiWarningOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

export const LevelDelete = ({ show, onClose, levelId }) => {
  const { deleteLevel, errors } = useContext(LevelContext);

  return (
    <>
      <Modal dismissible show={show} size="lg" onClose={onClose} popup>
        <Modal.Header className="delete-modal" />
        <Modal.Body className="delete-modal">
          <div className="delete-modal">
            <div className="delete-modal__icon">
              <IconContext.Provider value={{ size: "124px", color: "#ffff7f" }}>
                <TiWarningOutline />
              </IconContext.Provider>
            </div>
            <h3 className="delete-modal__message">
              Tem certeza que deseja deletar esse nível?
            </h3>
            <div className="flex justify-center gap-2">
              <button
                className="delete-modal__button delete-modal__button--delete"
                onClick={() => deleteLevel(levelId)}
              >
                Deletar
              </button>
              <button className="delete-modal__button" onClick={onClose}>
                Cancelar
              </button>
            </div>
            {errors.error && (
              <span className="text-sm font-medium text-red-400">
                {errors.error}
              </span>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
