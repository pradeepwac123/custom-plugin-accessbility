"use client";
import useCustomPlugin from "./useCustomPlugin";
import Style from "./CustomPlugin.module.scss";
import CustomPluginModal from "./CustomPluginModal";
import Icon from "../iconmoon";
import TextReader from "./TextReader";
import FontSize from "./FontSize";
import ThemeSelect from "./ThemeSelect";
import CustomColorPicker from "./CustomColorPicker";
import CursorStyle from "./CursorStyle";
import SaturationButton from "./SaturationButton";
import ContrastButton from "./ContrastButton";

const CustomPlugin = () => {
  const {
    // handleClick,
    IncreaseFontSize,
    customModalAnim,
    showCustomModal,
    closeCustomModal,
    handleClickPlugin,
    DecreaseFontSize,
    progress,
    handleColorChange,
    handleColorTabChange,
    bgColor,
    headingColor,
    contentColor,
    colorTab,
    Reset,
    changeTheme,
    theme,
    enableCustomColor,
    CustomColor,
    showTextReader,
    textReader,
    NextWord,
    PrevWord,
    play,
    speachStart,
    voiceStore,
    handleSelectLang,
    voiceIndex,
    changeVoice,
    showDropdownVoice,
    fontsizeArray,
    bigCursor,
    cursor,
    handleSaturation,
    handleContrast,
    //saturation
    contrast,
    contrastText,
    saturation,
    saturationLevelName,
    textReaderDropdown,
    setTextReaderDropdown,
    handleCloseTextReaderDropdown
  } = useCustomPlugin();

  

  return (
    <section
      className={`${Style.customplugin_section} overflow-hidden no-accessibility fixed z-10 top-0`}
    >
      <div className="row">
        <div className="col-6">
          <button
            className="fixed bottom-52 left-1 bg-[red] p-3 text-white rounded-[4px]"
            onClick={handleClickPlugin}
          >
            <Icon icon="accessibility" size={25}/>
          </button>

          <CustomPluginModal
            customModalAnim={customModalAnim}
            showCustomModal={showCustomModal}
            customModalAlign={"left"} //left or right
          >
            <CustomPluginModal.Header>
              <div className="flex items-center justify-between">
                <h5 aria-label="custom plugin offcanvas title is given cutsom plugin">
                  Custom plugin
                </h5>
                <button
                  className="close-icon relative w-[30px] h-[30px] hover:before:scale-110  hover:after:scale-110 text-black cursor-pointer hover:border-[black] before:[*] before:transition-background-color before:transition-transform after:transition-background-color after:transition-transform  before:will-change-transform after:will-change-transform	 before:w-[100%] before:h-[2px] before:bg-[black] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] after:[*]  after:transition-[background-color, transform] after:w-[100%] after:h-[2px] after:bg-[black] after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-[45deg] before:rotate-[-45deg] "
                  onClick={closeCustomModal}
                  aria-label="close button for close the custom plugin"
                ></button>
              </div>
            </CustomPluginModal.Header>

            <CustomPluginModal.Body>
              <div className="relative pt-5">
                {/* font size */}

                <FontSize
                  IncreaseFontSize={IncreaseFontSize}
                  DecreaseFontSize={DecreaseFontSize}
                  progress={progress}
                />

                {/* font size */}

                {/* theme select  */}

                <ThemeSelect theme={theme} changeTheme={changeTheme} />

                {/* theme select  */}

                {/* custom color picker */}
                <CustomColorPicker
                  enableCustomColor={enableCustomColor}
                  CustomColor={CustomColor}
                  colorTab={colorTab}
                  handleColorChange={handleColorChange}
                  handleColorTabChange={handleColorTabChange}
                  bgColor={bgColor}
                  headingColor={headingColor}
                  contentColor={contentColor}
                />
                {/* custom color picker */}

                <div className="other accesbility grid grid-cols-2 mb-10 gap-x-3 gap-y-3">
                  <div className="col-span-1 ">
                    <button
                      className={`w-full h-full p-5 border-[1px] border-[#000] hover:bg-black hover:text-white transition-[background-color, color] duration-300 ${
                        textReader && "bg-black text-white"
                      }`}
                      onClick={showTextReader}
                      aria-label="text reader popup button "
                    >
                      <span className="mr-2">Text Reader </span><Icon icon="volume-high" size={20} />
                    </button>
                  </div>


                  <div className="col-span-1">
                    <CursorStyle bigCursor={bigCursor} cursor={cursor} />
                  </div>

                  <div className="col-span-1">
                    <SaturationButton handleSaturation={handleSaturation} saturationLevelName={saturationLevelName} saturation={saturation} />
                  </div>

                  <div className="col-span-1">
                    <ContrastButton handleContrast={handleContrast} contrast={contrast} contrastText={contrastText} />
                  </div>
                </div>
              </div>
            </CustomPluginModal.Body>

            <CustomPluginModal.Footer>
              <button
                className="w-full py-4 px-3 text-[20px] flex items-center justify-center leading-[0] border-[1px] border-[black] transition-[background-color, color] duration-300 text-black text-center hover:bg-black hover:text-white"
                onClick={Reset}
              >
                Reset <span className="ml-3"><Icon icon="reload" size={20} /></span>
              </button>
            </CustomPluginModal.Footer>
          </CustomPluginModal>

          {/************ text reader popup*****************/}

          {textReader && (
            <TextReader
              PrevWord={PrevWord}
              play={play}
              NextWord={NextWord}
              speachStart={speachStart}
              voiceStore={voiceStore}
              handleSelectLang={handleSelectLang}
              voiceIndex={voiceIndex}
              changeVoice={changeVoice}
              showDropdownVoice={showDropdownVoice}
              textReaderDropdown={textReaderDropdown}
              setTextReaderDropdown={setTextReaderDropdown}
              handleCloseTextReaderDropdown={handleCloseTextReaderDropdown}
            />
          )}

          {/************ text reader popup*****************/}
        </div>

        {/* <div className="col-6">
          {fontsizeArray?.map((data, i) => {
            return (
              <p key={i}>
                <span>{data?.tagName}</span> <span>{data?.NewFontSize}</span>
              </p>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default CustomPlugin;
