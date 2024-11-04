import React from "react";
import useCustomPlugin from "./useCustomPlugin";
import Style from "./CustomPlugin.module.scss";

const CustomPluginModal = ({
  closeModal,
  customModalAnim,
  showCustomModal,
  customModalAlign = "left",
  children,
}) => {
  return (
    <div
      className={`custom-modal w-full h-lvh fixed top-0 left-0 no-accessibility ${
        showCustomModal ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`custom-modal-bg-wrap h-full transition-transform ease duration-[400ms] ${
          customModalAnim ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div
          className={`  w-full max-w-[700px]  bg-white h-[100vh] z-[2] absolute flex flex-col `}
        >
          {children}
        </div>
      </div>

      {/* bg-dropshadow */}
      <div
        className={`custom-modal-bg-shadow bg-[rgba(0,0,0,0)] w-full h-lvh  fixed top-0 left-0 z-[-1] transition-opacity ease duration-[400ms] ${
          customModalAnim ? "opacity-100" : "opacity-0"
        } `}
        onClick={closeModal}
      ></div>
    </div>
  );
};

// Subcomponent for Modal Header
CustomPluginModal.Header = ({ children }) => {
  return <div className="custom-modal-header shadow-[0px_1px_3px_0px_#ccc] p-5  text-black">{children}</div>;
};

// Subcomponent for Modal Body
CustomPluginModal.Body = ({ children }) => {
  return (
    <div className="modal-body flex-[1,0] h-full overflow-y-scroll p-5 text-black">
      {children} {/* Render body content */}
    </div>
  );
};

// Subcomponent for Modal Footer
CustomPluginModal.Footer = ({ children }) => {
  return (
    <div className="modal-footer p-5 shadow-[0_-1px_3px_0_#ccc] text-black">
      {children} {/* Render footer content */}
    </div>
  );
};

export default CustomPluginModal;
