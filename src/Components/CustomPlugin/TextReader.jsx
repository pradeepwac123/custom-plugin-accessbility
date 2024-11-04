import React from "react";
import Icon from "../iconmoon";

const TextReader = ({
  PrevWord,
  play,
  NextWord,
  speachStart,
  voiceStore,
  handleSelectLang,
  voiceIndex,
  changeVoice,
  showDropdownVoice,
  setTextReaderDropdown,
  textReaderDropdown,
  handleCloseTextReaderDropdown,
}) => {
  return (
    <div className="fixed bottom-[2%] w-full max-w-[500px] left-0 right-0 mx-auto ">
      {textReaderDropdown && (
        <div className="">
          <span onClick={handleCloseTextReaderDropdown} className="text-blue-500 bg-white p-2 rounded-[5px] cursor-pointer block shadow-[0px_1px_3px_0px_#ccc] transition-[transform, color, background-color] duration-300 will-change-transform hover:bg-[red] hover:text-white  w-fit ml-auto mb-3">
            <Icon icon="close" size={30} />
          </span>

          <div className="language-select-wrapper mb-1  relative p-0 ">
            <div
              className="select-value rounded-[5px] bg-white  py-3 px-2 cursor-pointer shadow-[0px_1px_3px_0px_#ccc]"
              onClick={changeVoice}
            >
              <ul className="pr-5 relative before:[*] before:border-b-[1.5px] before:border-l-[1.5px] before:border-[#000] before:w-[10px] before:h-[10px] before:absolute before:top-[50%] before:right-[10px] before:rotate-[-45deg] before:translate-y-[-50%]">
                <li>{voiceIndex?.name && voiceIndex?.name}</li>
              </ul>
            </div>

            {showDropdownVoice && (
              <div className="language-dropdown absolute shadow-[0px_1px_3px_0_#ccc] top-[50px] overflow-hidden w-full min-h-[150px] bg-white left-0 rounded-[5px]">
                {voiceStore.length > 0 && (
                  <ul className="overflow-y-scroll h-full max-h-[148px] ">
                    {voiceStore?.map((data, i) => {
                      return (
                        <li
                          key={i}
                          className={`cursor-pointer   px-2 py-2   transition-[background-color,color] ${
                            voiceIndex.i === i ? "bg-blue-500 hover:bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-black"
                          }`}
                          onClick={() => {
                            handleSelectLang(data?.voices, i), changeVoice();
                          }}
                        >
                          {data?.voices?.name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="shadow-[0px_1px_3px_0px_#ccc] rounded-[5px] text-center border-[black]  bg-white py-10 px-5 ">
            <button onClick={PrevWord} className="mx-3 group">
              <Icon
                icon="backward"
                size={30}
                className="text-black group-hover:text-blue-500 transition-[color] duration-200"
              />
            </button>

            <button onClick={play} className="mx-3 group">
              <Icon
                icon={`${speachStart ? "pause" : "play"}`}
                size={30}
                className="text-black group-hover:text-blue-500 transition-[color] duration-200"
              />
            </button>

            <button onClick={NextWord} className="mx-3 group ">
              <Icon
                icon="forward"
                size={30}
                className="text-black group-hover:text-blue-500 transition-[color] duration-200"
              />
            </button>
          </div>
        </div>
      )}

      <div onClick={handleCloseTextReaderDropdown} className="textreader-icon mt-4 bg-white p-4 rounded-[5px] transition-[background-color,color] duration-300 w-fit mx-auto cursor-pointer shadow-[0_1px_3px_0px_#ccc] hover:bg-blue-500 hover:text-white">
        <Icon icon="volume-high" size={25}  />
      </div>
    </div>
  );
};

export default TextReader;
