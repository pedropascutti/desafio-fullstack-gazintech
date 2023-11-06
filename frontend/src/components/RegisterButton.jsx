import { FaCirclePlus } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const RegisterButton = ({ onClick }) => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <button
        onClick={onClick}
        className="
          flex 
          items-center 
          gap-1 
          bg-indigo-500 
          hover:bg-indigo-700 
          text-white 
          text-lg
          font-semibold
          rounded-md 
          p-2 
          duration-150
        "
      >
        <FaCirclePlus /> Cadastrar
      </button>
    </IconContext.Provider>
  );
};
