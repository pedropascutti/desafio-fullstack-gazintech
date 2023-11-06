import { useState, useEffect, useContext } from "react";
import DeveloperContext from "../../Context/DeveloperContext";
import { RegisterButton } from "../RegisterButton";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IconContext } from "react-icons";
import { DeveloperCreate } from "./DeveloperCreate";
import { DeveloperEdit } from "./DeveloperEdit";
import { DeveloperDelete } from "./DeveloperDelete";

export const DeveloperIndex = () => {
  const { getDevelopers, developers, getDeveloper, previousPage, nextPage } = useContext(DeveloperContext);
  const [id, setId] = useState(null);

  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleRegisterOpen = () => setOpenRegisterModal(true);
  const handleRegisterClose = () => setOpenRegisterModal(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleEditOpen = () => setOpenEditModal(true);
  const handleEditClose = () => setOpenEditModal(false);

  const handleEditClick = (e) => {
    setId(e.currentTarget.value);
    handleEditOpen();
  };

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleDeleteOpen = () => setOpenDeleteModal(true);
  const handleDeleteClose = () => setOpenDeleteModal(false);

  const handleDeleteClick = (e) => {
    setId(e.currentTarget.value);
    handleDeleteOpen();
  };

  const handlePreviousPageClick = () => {
    previousPage()
  }

  const handleNextPageClick = () => {
    nextPage();
  }

  useEffect(() => {
    getDevelopers("http://localhost:8000/developers");
  }, []);

  useEffect(() => {
    if (id !== null) getDeveloper(id);
  }, [id]);

  useEffect(() => {
    handleRegisterClose();
    handleEditClose();
    handleDeleteClose();
  }, [developers]);

  return (
    <>
      <div className="items-list">
        <table className="table">
          <caption className="table__caption">
            <div className="table__caption-content">
              Listagem de Desenvolvedores
              <RegisterButton onClick={handleRegisterOpen} />
            </div>
          </caption>
          <thead className="table__head">
            <tr>
              <th scope="col" className="table__head-content">
                Nome
              </th>
              <th scope="col" className="table__head-content">
                Nível
              </th>
              <th scope="col" className="table__head-content">
                Sexo
              </th>
              <th scope="col" className="table__head-content">
                Idade
              </th>
              <th scope="col" className="table__head-content">
                Data de nascimento
              </th>
              <th scope="col" className="table__head-content">
                Hobby
              </th>
              <th scope="col" className="table__head-content table__head-content--right">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            {developers.map((developer) => (
              <tr key={developer.id} className="table__row">
                <th scope="row" className="table__cell table__cell-main">
                  {developer.name}
                </th>
                <td className="table__cell">
                    {developer.level}
                </td>
                <td className="table__cell">
                    {developer.gender}
                </td>
                <td className="table__cell">
                    {developer.age}
                </td>
                <td className="table__cell">
                    {developer.birth_date}
                </td>
                <td className="table__cell">
                    {developer.hobby}
                </td>
                <td className="table__cell justify-end flex">
                  <div className="flex gap-3">
                    <IconContext.Provider value={{ size: "18px", color: "#7fff7f" }}>
                      <button value={developer.id} onClick={handleEditClick}>
                        <FaPenToSquare />
                      </button>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "18px", color: "#ff5252" }}>
                      <button value={developer.id} onClick={handleDeleteClick}>
                        <FaTrash />
                      </button>
                    </IconContext.Provider>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="pagination">
        <ul className="pagination__list">
          <li onClick={handlePreviousPageClick} className="pagination__list-item rounded-l-lg">
            <span className="sr-only">Previous</span>
            <MdNavigateBefore />
          </li>
          <li onClick={handleNextPageClick} className="pagination__list-item rounded-r-lg">
            <span className="sr-only">Next</span>
            <MdOutlineNavigateNext />
          </li>
        </ul>
      </nav>

      <DeveloperCreate show={openRegisterModal} onClose={handleRegisterClose} />
      <DeveloperEdit show={openEditModal} onClose={handleEditClose} />
      <DeveloperDelete show={openDeleteModal} onClose={handleDeleteClose} developerId={id} />
    </>
  );
};
