import React from "react";

const FontSize = ({DecreaseFontSize,IncreaseFontSize,progress}) => {
  return (
    <div className="mb-10 fontsize">
      <h6 className="mb-3" aria-label="font size heading">
        Font Size
      </h6>
      <div className="flex items-center">
        <button
          onClick={DecreaseFontSize}
          aria-label="button for decrease font size"
          disabled={progress == 0 ? true : false}
          className={`relative transition-[background-color] w-[40px] h-[40px]  border-[1px] border-[#000] rounded-[50%] p-2 hover:bg-[black] hover:text-[#fff] hover:before:bg-[#fff] hover:border-[black] before:[*] before:w-[40%] before:h-[2px] before:bg-[black] before:transition-[background-color] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] ${
            progress === 0 ? "pointer-events-none opacity-50" : ""
          }`}
        ></button>
        <span
          className={`progress-bar w-full h-[15px] mx-2  bg-[rgba(211,211,211,1)] block relative before:[*] before:h-[100%]  before:absolute before:top-0 before:left-0 before:bg-[rgb(0,0,0)] before:transition-all before:ease-linear`}
          style={{ "--progress-barwidth": `${progress}%` }}
        ></span>

        <button
          onClick={IncreaseFontSize}
          aria-label="button for increase font size"
          disabled={progress == 100 ? true : false}
          className={`w-[40px] relative transition-[background-color] h-[40px] border-[1px] border-[#000]  p-2 hover:bg-[black] rounded-[50%] hover:text-[#fff]  hover:before:bg-[#fff] hover:after:bg-[#fff] hover:border-[black] before:[*] before:transition-[background-color] before:w-[40%] before:h-[2px] before:bg-[black] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] after:[*]  after:transition-[background-color] after:w-[40%] after:h-[2px] after:bg-[black] after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-[90deg] ${
            progress === 100 ? "pointer-events-none opacity-50" : ""
          } `}
        ></button>
      </div>
    </div>
  );
};

export default FontSize;
