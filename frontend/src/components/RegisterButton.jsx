import { FaCirclePlus } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const RegisterButton = ({ onClick }) => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <button onClick={onClick} className="register__button">
        <FaCirclePlus /> Cadastrar
      </button>
    </IconContext.Provider>
  );
};
