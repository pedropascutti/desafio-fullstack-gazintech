import { useContext } from "react";
import { Modal } from "flowbite-react";
import LevelContext from "../../Context/LevelContext";

export const LevelEdit = ({ show, onClose }) => {
  const { onChange, updateLevel, formValues } = useContext(LevelContext);

  return (
    <>
      <Modal show={show} onClose={onClose} dismissible>
        <Modal.Header className="form__header">
          <span className="form__header-title">Editar nível</span>
        </Modal.Header>
        <Modal.Body className="form__body">
          <form onSubmit={updateLevel}>
            <div className="mb-2">
              <label htmlFor="name" className="form__body-label">
                Nível
              </label>
              <input
                type="text"
                className="form__body-input"
                id="name"
                autoComplete="true"
                name="name"
                value={formValues["name"]}
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="form__body-button">
              Salvar
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer className="border-slate-800 form__footer">
          <button className="form__footer-button" onClick={onClose}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
