import { useContext, useEffect } from "react";
import { Modal } from "flowbite-react";
import DeveloperContext from "../../Context/DeveloperContext";

export const DeveloperEdit = ({ show, onClose }) => {
  const { onChange, updateDeveloper, levels, getLevels, errors, formValues } = useContext(DeveloperContext);

  useEffect(() => {
    getLevels();
  }, []);

  return (
    <>
      <Modal show={show} onClose={onClose} dismissible>
        <Modal.Header className="form__header">
          <span className="form__header-title">Editar desenvolvedor</span>
        </Modal.Header>
        <Modal.Body className="form__body">
          <form onSubmit={updateDeveloper}>
            <div className="mb-2">
              <label htmlFor="name" className="form__body-label">
                Nome
              </label>
              <input
                type="text"
                className="form__body-input"
                name="name"
                id="name"
                value={formValues.name}
                autoComplete="true"
                onChange={onChange}
                required
              />
            </div>
            <div className="form__body-group">
              <div>
                <label htmlFor="name" className="form__body-label">
                  Nível
                </label>
                <select
                  defaultValue={formValues.level_id}
                  name="level_id"
                  id="level_id"
                  onChange={onChange}
                  className="form__body-input"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form__body-label">Sexo</label>
                <div className="flex">
                  <div className="flex items-center mr-4">
                    <input
                      onChange={onChange}
                      checked={formValues.gender === "Masculino"}
                      id="masculino"
                      type="radio"
                      value="Masculino"
                      name="gender"
                      className="form__body-input-radio"
                    />
                    <label htmlFor="masculino" className="form__body-label">
                      Masculino
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      onChange={onChange}
                      checked={formValues.gender === "Feminino"}
                      id="feminino"
                      type="radio"
                      value="Feminino"
                      name="gender"
                      className="form__body-input-radio"
                    />
                    <label htmlFor="feminino" className="form__body-label">
                      Feminino
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      onChange={onChange}
                      checked={formValues.gender === "Outro"}
                      id="outro"
                      type="radio"
                      value="Outro"
                      name="gender"
                      className="form__body-input-radio"
                    />
                    <label htmlFor="outro" className="form__body-label">
                      Outro
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form__body-group">
              <div>
                <label htmlFor="birth_date" className="form__body-label">
                  Data de nascimento
                </label>
                <input
                  type="date"
                  value={formValues.birth_date}
                  id="birth_date"
                  name="birth_date"
                  onChange={onChange}
                  className="form__body-input"
                />
              </div>
              <div className="ml-2">
                <label htmlFor="age" className="form__body-label">
                  Idade
                </label>
                <input
                  id="age"
                  name="age"
                  disabled
                  readOnly={true}
                  value={formValues["age"]}
                  type="number"
                  className="bg-slate-300 form__body-input"
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="hobby" className="form__body-label">
                Hobby
              </label>
              <input
                type="text"
                className="form__body-input"
                name="hobby"
                id="hobby"
                value={formValues.hobby}
                autoComplete="true"
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
