import React from "react";

const ThemeSelect = ({changeTheme,theme}) => {
  return (
    <div className="modes mb-5 flex items-center">
      <h6 className="block "> Light / Dark Theme</h6>

      <div
        className={` w-20 scale-[0.8] ml-3 cursor-pointer rounded-3xl toggler transition-[background-color]  ${
          theme === "dark"
            ? "bg-black  border-[1px]  border-[black]"
            : "bg-white  border-[1px] border-[black]"
        }`}
        aria-label="toggle button for change website theme into dark or light"
        onClick={changeTheme}
      >
        <div
          className={`w-10 h-10  rounded-3xl  transition-[background-color,transform]  ${
            theme === "dark"
              ? "bg-white translate-x-[2.45rem] scale-75"
              : "bg-black scale-75"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeSelect;
