import React from "react";

const CustomColorPicker = ({enableCustomColor,CustomColor,handleColorChange,handleColorTabChange,bgColor,headingColor,contentColor, colorTab}) => {
  return (
    <div className={`colorpicker  mb-10`}>
      <div className="customcolor flex items-center mb-4">
        <h6 className="">Custom Color</h6>

        <div
          className={` w-20 scale-[0.8] ml-3 cursor-pointer rounded-3xl toggler transition-[background-color]  ${
            enableCustomColor
              ? "bg-black  border-[1px]  border-[black]"
              : "bg-white  border-[1px] border-[black]"
          }`}
          aria-label="this is work like a button when click this enable the custom color for website section background ,heading and content"
          onClick={CustomColor}
        >
          <div
            className={`w-10 h-10  rounded-3xl  transition-[background-color,transform]  ${
              enableCustomColor
                ? "bg-white translate-x-[2.45rem] scale-75"
                : "bg-black scale-75"
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`${
          !enableCustomColor ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <button
          id="bgcolor"
          onClick={handleColorTabChange}
          aria-label="this tab button to select to change the color of section background"
          className={`px-3 py-3 border-[1px] border-black   mx-2 text-center ms-0  ${
            colorTab === "bgcolor" ? "text-[white] bg-black" : " text-black"
          }`}
        >
          Background color
        </button>
        <button
          id="headingcolor"
          aria-label="this tab button to select to change the color of headings"
          onClick={handleColorTabChange}
          className={`px-3 py-3 border-[1px] border-black  mx-2 text-center  ${
            colorTab === "headingcolor"
              ? "text-[white] bg-[black]"
              : "text-black"
          }`}
        >
          Heading color
        </button>
        <button
          aria-label="this tab button to select to change the color of all content"
          id="contentcolor"
          onClick={handleColorTabChange}
          className={`px-3 py-3 border-[1px] border-black  mx-2 text-center ${
            colorTab === "contentcolor"
              ? "text-[white] bg-[black]"
              : "text-black"
          }`}
        >
          Content color
        </button>

        <div className="mt-5">
          {/* Render the Color Picker based on the selected tab */}
          <div className="mb-5">
            <input
              type="color"
              value={
                colorTab === "bgcolor"
                  ? bgColor
                  : colorTab === "headingcolor"
                  ? headingColor
                  : contentColor
              }
              onChange={handleColorChange}
              className="border p-0 w-full max-w-[20%] px-[10px] py-[10px] h-[50px] bgcolor"
            />
          </div>

          {/* Display selected colors */}
          <p>
            Selected Background Color :{" "}
            <span className="font-bold">{bgColor}</span>{" "}
          </p>
          <p>
            Selected Heading Color :{" "}
            <span className="font-bold">{headingColor}</span>{" "}
          </p>
          <p>
            Selected Content Color :{" "}
            <span className="font-bold">{contentColor}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomColorPicker;
