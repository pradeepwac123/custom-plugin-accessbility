import Icon from "../iconmoon";

const ContrastButton = ({
    handleContrast,
    contrast,
    contrastText
}) => {
  

  return (
    <button
      className={`group w-full h-full p-5 border-[1px] border-[#000]  flex flex-col hover:bg-black hover:text-white transition-[background-color, color] duration-300 justify-center items-center ${contrast !==0 ? "bg-black text-white":""}  `}
      onClick={handleContrast}
    >
      <span className="mb-3">
         {contrastText}
        <span className="m-3">
          <Icon icon="contrast" size={20} />
        </span>
      </span>

      <span className="flex">
        <span
          className={`w-[20px] h-[3px]  transition-[background-color, color] duration-300  mx-2 ${contrast == 1 ? "bg-[red]" :"bg-[#ccc]"}`}
        ></span>
        <span
          className={`w-[20px] h-[3px]  transition-[background-color, color] duration-300  mx-2 ${contrast == 2 ? "bg-[red]" :"bg-[#ccc]"}`}
        ></span>
        <span
          className={`w-[20px] h-[3px]  transition-[background-color, color] duration-300  mx-2 ${contrast == 3 ? "bg-[red]" :"bg-[#ccc]"}`}
        ></span>
      </span>
    </button>
  );
};

export default ContrastButton;
