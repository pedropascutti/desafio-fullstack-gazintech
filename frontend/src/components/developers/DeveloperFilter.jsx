import { useContext, useEffect } from "react";
import { Modal } from "flowbite-react";
import DeveloperContext from "../../Context/DeveloperContext";

export const DeveloperFilter = ({ show, onClose }) => {
  const {
    onFilterChange,
    errors,
    handleFilterSubmit,
    getLevels,
    levels,
    filterFormValues,
  } = useContext(DeveloperContext);

  useEffect(() => {
    getLevels();
  }, []);

  return (
    <>
      <Modal show={show} onClose={onClose} dismissible>
        <Modal.Header className="form__header">
          <span className="form__header-title">Filtrar desenvolvedor</span>
        </Modal.Header>
        <Modal.Body className="form__body">
          <form onSubmit={handleFilterSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="form__body-label">
                Nome
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="form__body-input"
                onChange={onFilterChange}
                autoComplete="true"
                value={filterFormValues["name"]}
              />
            </div>
            <div className="form__body-group md:grid-cols-3">
              <div>
                <label htmlFor="name" className="form__body-label">
                  Nível
                </label>
                {filterFormValues["level_id"] !== "" && (
                  <select
                    name="level_id"
                    id="level_id"
                    className="form__body-input"
                    onChange={onFilterChange}
                    defaultValue={filterFormValues["level_id"]}
                  >
                    <option value="0" disabled>
                      Selecione um nível
                    </option>
                    {levels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                )}
                {filterFormValues["level_id"] === "" && (
                  <select
                    name="level_id"
                    id="level_id"
                    className="form__body-input"
                    onChange={onFilterChange}
                    defaultValue={"0"}
                  >
                    <option value="0" disabled>
                      Selecione um nível
                    </option>
                    {levels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div>
                <label htmlFor="gender" className="form__body-label">
                  Sexo
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="form__body-input"
                  onChange={onFilterChange}
                  defaultValue={"0"}
                >
                  <option value="0" disabled>
                    Selecione o sexo
                  </option>
                  <option value="Masculino" key="Masculino">
                    Masculino
                  </option>
                  <option value="Feminino" key="Feminino">
                    Feminino
                  </option>
                  <option value="Outro" key="Outro">
                    Outro
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="age" className="form__body-label">
                  Idade
                </label>
                <input
                  name="age"
                  id="age"
                  type="number"
                  className="form__body-input"
                  onChange={onFilterChange}
                  value={filterFormValues["age"]}
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="hobby" className="form__body-label">
                Hobby
              </label>
              <input
                name="hobby"
                id="hobby"
                type="text"
                className="form__body-input"
                onChange={onFilterChange}
                autoComplete="true"
                value={filterFormValues["hobby"]}
              />
            </div>
            <button type="submit" className="form__body-button">
              Aplicar filtro
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
