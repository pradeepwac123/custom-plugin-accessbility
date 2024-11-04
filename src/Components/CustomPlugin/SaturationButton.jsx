import Icon from "../iconmoon";

const SaturationButton = ({
  handleSaturation,
  saturation,
  saturationLevelName,
}) => {

  return (
    <button
      className={`w-full h-full p-5 border-[1px] flex flex-col  transition-[background-color, color] duration-300 justify-center items-center  ${saturation !=0 ? "bg-black text-white border-black " :"text-black border-[#000] hover:bg-black hover:text-white"}`}
      onClick={handleSaturation}
    >
      <span className="mb-3">
        {saturationLevelName[saturation]}
        <span className="m-3">
          <Icon icon="droplet" size={20} />
        </span>
      </span>

      <span className="flex">
        <span
          className={`w-[20px] h-[3px]  mx-2 ${
            saturation === 1 ? "bg-[red]" : "bg-[#ccc]"
          }`}
        ></span>
        <span
          className={`w-[20px] h-[3px]  mx-2 ${
            saturation === 2 ? "bg-[red]" : "bg-[#ccc]"
          }`}
        ></span>
        <span
          className={`w-[20px] h-[3px]  mx-2 ${
            saturation === 3 ? "bg-[red]" : "bg-[#ccc]"
          }`}
        ></span>
      </span>
    </button>
  );
};

export default SaturationButton;
