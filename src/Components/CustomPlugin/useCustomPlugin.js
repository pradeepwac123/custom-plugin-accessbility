
import React, { useEffect, useRef, useState } from 'react'

const useCustomPlugin = () => {

    const [showCustomModal, setShowCustomModal] = useState(false);
    const [customModalAnim, setCustomModalAnim] = useState(false);
    const [theme, setTheme] = useState("light")


    //color selection
    const [colorTab, setColorTab] = useState("bgcolor");
    const [bgColor, setBgColor] = useState("");       // State for bgcolor
    const [headingColor, setHeadingColor] = useState(""); // State for headingcolor
    const [contentColor, setContentColor] = useState(""); // State for contentcolor\
    const [windowload, setwindowload] = useState(false);
    //close color selection

    //testing inc
    const [mutiplyFontsize, setmutiplyFontsize] = useState(1);
    const [storeFont, setStoreFont] = useState([]);

    //progress width
    const savedUpdateProgress = localStorage.getItem("UpdateIncrement");
    const ProgressWidth = localStorage.getItem("progessWidth");

    const [updateInc, setUpdateInc] = useState(savedUpdateProgress !== null ? parseFloat(savedUpdateProgress) : 0);
    const [progress, setProgress] = useState(ProgressWidth !== null ? parseFloat(ProgressWidth) : 0);

    let storedState = localStorage.getItem('isToggled');
    const [triggerInc, setTriggerInc] = useState(storedState != null ? true : false)


    //custom color enable / disable

    const savedCustomColor = localStorage.getItem("setCustomColor");
    const booleanValue = savedCustomColor === "true";
    const [enableCustomColor, setenableCustomColor] = useState(booleanValue);


    const [textReader, setTextReader] = useState(false);

    const savedDropdownStateValue = localStorage.getItem("setTextReaderDropdownState");
    const booleanValueSavedDropdown = savedDropdownStateValue === "true";
    const [textReaderDropdown, setTextReaderDropdown] = useState(booleanValueSavedDropdown)

    const [voiceStore, setVoiceStore] = useState([]);
    const [newvoice, setVoice] = useState("");
    const [voiceIndex, setVoiceIndex] = useState({ i: 0, name: "default name" })
    const [StoreReadableEl, setStoreReadableEl] = useState([]);
    const [showDropdownVoice, setshowDropdownVoice] = useState(false)


    const [count, setCount] = useState(0);
    const hasMounted = useRef(false); // Track initial render
    const [speachStart, setSpeachstart] = useState(false);

    //cursor state

    const [cursor, setCursor] = useState(false);

    //saturation State

    const getSaturationLevel = localStorage.getItem("saturationLevel");
    const [saturation, setSaturation] = useState(getSaturationLevel !== null ? parseFloat(getSaturationLevel) : 0)

    //close saturation State

    //contrast state
    const [contrastText, setContrastText] = useState("Contrast")
    const saveContrast = localStorage.getItem("setcontrast");

    const [contrast, setContrast] = useState(saveContrast !== null ? parseFloat(saveContrast) : 0);

    //contrast state

    //fonts sizeArray
    const fontsizeArray = [];

    //voice store array
    const VoiceStoreArray = [];
    //testing inc

    const maxIncreament = 3;
    let bodyEl = document.querySelector("body");
    let mainEl = document.querySelector(".main");

    useEffect(() => {


        let allElements = document.querySelectorAll('.main *');

        allElements.forEach(element => {
            newtestingEl(element);
        })

        setwindowload(true);
        setStoreFont(fontsizeArray);
        setVoiceStore(VoiceStoreArray)
    }, [])

    useEffect(() => {

        const storedState = localStorage.getItem('isToggled');

        if (storedState === 'true' || storedState != null) {  // Check for the string 'true'
            setTriggerInc(true); // Set the boolean state to true
        }


    }, [triggerInc])


    useEffect(() => {
        const multiplyFontgetItem = localStorage.getItem("setMutltiplyFontsize");

        if (multiplyFontgetItem !== null) {
            setmutiplyFontsize(multiplyFontgetItem)
        }
    }, [mutiplyFontsize])


    // short cut key is created for disability peoples to open accessbility
    useEffect(() => {

        const keyState = {
            space: false,
            arrowUp: false,
            arrowDown: false,
        };

        const handleKeyDown = (event) => {

            if (event.code === 'Space') keyState.space = true;
            if (event.key === 'ArrowUp') keyState.arrowUp = true;
            if (event.key === 'ArrowDown') keyState.arrowDown = true;

            // Trigger the function if both keys are pressed
            if (keyState.space && keyState.arrowUp) {
                event.preventDefault();
                handleClickPlugin();
                keyState.space = false;
            keyState.arrowUp = false;

            }

            if (keyState.space && keyState.arrowDown) {
                event.preventDefault();
                closeCustomModal();
                keyState.space = false;
                keyState.arrowDown = false;

            }
        };

        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup on component unmount
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);
    // short cut key is created for disability peoples to open accessbility


    const handleClickPlugin = () => {

        setShowCustomModal(true);

        setTimeout(() => {
            setCustomModalAnim(true)
        }, 300);
    }

    //*******close modal*************

    const closeCustomModal = () => {
        setCustomModalAnim(false)

        setTimeout(() => {
            setShowCustomModal(false);
        }, 300);
    }

    // **********close modal**********

    function newtestingEl(element) {


        if (!element.classList.contains('no-accessibility') &&
            !element.closest('.no-accessibility')) {

            if (element.tagName.toLowerCase() !== 'script' &&
                element.tagName.toLowerCase() !== 'svg' &&
                element.tagName.toLowerCase() !== 'main' &&
                element.tagName.toLowerCase() !== 'path') {

                let el = element;
                let elTagname = el.tagName.toLowerCase();
                const computedStyles = window.getComputedStyle(element);
                const backgroundColor = rgbaToHex(computedStyles.backgroundColor);
                const textColor = rgbaToHex(computedStyles.color);


                if (!["section", "div", "main", "body"].includes(elTagname)) {
                    el.classList.add("readable")
                }


                let Defaultfontsize = parseFloat(window.getComputedStyle(element).fontSize);

                fontsizeArray.push({ defaultFontSize: Defaultfontsize, element: el, newfontvalue: Defaultfontsize, elbackgroundColor: backgroundColor, elColor: textColor, tagname: elTagname })

            }
        }


        // Recursively log each child element
        Array.from(element.children).forEach(child => {
            newtestingEl(child); // Call the function for each child
        });
    }


    //increase font size

    const IncreaseFontSize = () => {

        setTriggerInc(true);

        let saveTrigger = "true";

        localStorage.setItem('isToggled', saveTrigger);

        if (updateInc < maxIncreament) {
            const increament = updateInc + 1;
            setUpdateInc(increament);

            const Beforewidth = (100 * (1 / maxIncreament * increament));
            setProgress(Beforewidth);

            localStorage.setItem("UpdateIncrement", increament)
            localStorage.setItem("progessWidth", Beforewidth)

            changeFontsize();

            let increaseMutiplyFontsize = parseFloat(mutiplyFontsize) + 0.1;
            setmutiplyFontsize(increaseMutiplyFontsize);
            localStorage.setItem("setMutltiplyFontsize", increaseMutiplyFontsize);

        }
    }

    //decrease a font size
    const DecreaseFontSize = () => {

        if (updateInc >= 1) {

            const decrement = updateInc - 1;
            const Beforewidth = (100 * (1 / maxIncreament * decrement));
            setProgress(Beforewidth);
            setUpdateInc(decrement);

            localStorage.setItem("UpdateIncrement", decrement)
            localStorage.setItem("progessWidth", Beforewidth)


            let increaseMutiplyFontsize = parseFloat(mutiplyFontsize) - 0.1;

            setmutiplyFontsize(increaseMutiplyFontsize);

            localStorage.setItem("setMutltiplyFontsize", increaseMutiplyFontsize);

            changeFontsize();
        }

    }

    //increment and decrement trigger this function
    const changeFontsize = () => {

        const newSize = storeFont.map((el) => {

            //defaultFontValue
            const defaultFontValue = parseFloat(el.defaultFontSize);

            //MultiplyFontValue
            const MultiplyFontValue = parseFloat(mutiplyFontsize);

            //calculation
            const loadingFontSize = (defaultFontValue * MultiplyFontValue / 16);

            const Setnewfontsize = parseFloat(loadingFontSize)

            el.element.style.fontSize = `${loadingFontSize}rem`;

            return {

                ...el,
                newfontvalue: Setnewfontsize,
            }

        })

        commonStoreDataFontSize(newSize);

    }

    const commonStoreDataFontSize = (newSize) => {
        setStoreFont(newSize);
    }


    //onload changed font size this useEffect works

    useEffect(() => {
        storeFont.map((el) => {
            const defaultFontValue = parseFloat(el.defaultFontSize);
            const MultiplyFontValue = parseFloat(mutiplyFontsize);
            const loadingFontSize = (defaultFontValue * MultiplyFontValue / 16);


            if (triggerInc) {
                el.element.style.fontSize = `${loadingFontSize}rem`;
            }
        })


    }, [storeFont, triggerInc])

    // Function to handle color tab selection
    const handleColorTabChange = (e) => {
        setColorTab(e.target.id);
    };


    // Function to handle color change based on selected tab
    const handleColorChange = (e) => {

        const newColor = e.target.value;

        if (colorTab === "bgcolor") {
            setBgColor(newColor);
            localStorage.setItem("bgColor", newColor);  // Store background color
        } else if (colorTab === "headingcolor") {
            setHeadingColor(newColor);
            localStorage.setItem("headingColor", newColor);  // Store heading color
        } else if (colorTab === "contentcolor") {
            setContentColor(newColor);
            localStorage.setItem("contentColor", newColor);  // Store content color
        }

    };


    // Load the saved colors from localStorage on component mount
    useEffect(() => {

        const savedUpdateProgress = localStorage.getItem("UpdateIncrement");
        const ProgressWidth = localStorage.getItem("progessWidth");
        const savedBgColor = localStorage.getItem("bgColor");
        const savedHeadingColor = localStorage.getItem("headingColor");
        const savedContentColor = localStorage.getItem("contentColor");
        const savedTheme = localStorage.getItem("setTheme");
        const savedCustomColor = localStorage.getItem("setCustomColor");


        //text reader popup
        let getTextReaderLocalstorage = localStorage.getItem("textreader");
        const booleanValueTextReader = getTextReaderLocalstorage === "true";
        setTextReader(getTextReaderLocalstorage !== null ? booleanValueTextReader : false);

        //close text area popup localstorage

        if (savedCustomColor !== null) {

            const booleanValue = savedCustomColor === "true";
            setenableCustomColor(booleanValue)
        }

        if (savedTheme !== null) {
            bodyEl.setAttribute('data-theme', savedTheme);
            setTheme(savedTheme);
        }

        if (savedUpdateProgress !== null) {
            const UpdateProgess = parseFloat(savedUpdateProgress);
            setUpdateInc(UpdateProgess);
        }

        if (ProgressWidth !== null) {
            const UpdateProgess = parseFloat(ProgressWidth);
            setProgress(UpdateProgess);
        }

        if (savedBgColor) setBgColor(savedBgColor);
        if (savedHeadingColor) setHeadingColor(savedHeadingColor);
        if (savedContentColor) setContentColor(savedContentColor);


        if (enableCustomColor) {
            //this  is a custom color set function
            CommonCallingCustomColor();

        }

    }, [windowload]);
    //local saved colors

    useEffect(() => {
        if (enableCustomColor) {
            colorChange();
        }
    }, [bgColor, contentColor, headingColor])

    const colorChange = () => {
        //this  is a custom color set function
        CommonCallingCustomColor();
    }

    //rgba to hex value convertion function

    function rgbaToHex(rgba) {
        // Extract the rgba values using regex
        const rgbaValues = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)$/);

        if (!rgbaValues) {
            throw new Error("Invalid RGBA color format");
        }

        const r = parseInt(rgbaValues[1]);
        const g = parseInt(rgbaValues[2]);
        const b = parseInt(rgbaValues[3]);
        const a = rgbaValues[4] !== undefined ? parseFloat(rgbaValues[4]) : 1;  // Default alpha to 1 if not provided

        // Convert each value to a 2-digit hexadecimal
        const toHex = (value) => value.toString(16).padStart(2, '0');

        const redHex = toHex(r);
        const greenHex = toHex(g);
        const blueHex = toHex(b);
        const alphaHex = toHex(Math.round(a * 255));  // Convert alpha from [0, 1] to [0, 255]

        // Combine the hex values
        return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
    }


    //function Reset
    function Reset() {
        // Array of keys you want to remove from localStorage
        const keysToRemove = ['UpdateIncrement', 'bgColor', 'contentColor', 'headingColor', 'isToggled', 'progessWidth', 'setMutltiplyFontsize', 'setcontrast', 'saturationLevel', 'setsaturationValue', 'setTheme', 'setCustomColor', 'textreader'];

        // Loop through the array and remove each key from localStorage
        keysToRemove.forEach((key) => {
            localStorage.removeItem(key);
        });

        // Reload the page after clearing the specific items
        location.reload();

    }

    function changeTheme() {

        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("setTheme", "dark");
            bodyEl.setAttribute('data-theme', 'dark');

        }
        else {
            setTheme("light");
            localStorage.setItem("setTheme", "light");
            bodyEl.setAttribute('data-theme', 'light');

        }

    }


    function CustomColor() {

        if (enableCustomColor) {

            setenableCustomColor(false);
            localStorage.setItem("setCustomColor", false)

            storeFont.map((el) => {
                el.element.style.backgroundColor = "";
                el.element.style.color = "";
            })

        }
        else {
            setenableCustomColor(true)
            localStorage.setItem("setCustomColor", true)
            CommonCallingCustomColor();

        }
    }


    function CommonCallingCustomColor() {

        storeFont.map((el) => {

            if (["header", "footer", "section", "div"].includes(el.tagname)) {
                el.element.style.backgroundColor = `${bgColor}`;  // Apply background color
            }
            else if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(el.tagname)) {

                el.element.style.color = `${headingColor}`;
                // Apply heading color
            }
            else if (["p", "span", "li", "a", "article", "address", "label"].includes(el.tagname)) {
                el.element.style.color = `${contentColor}`;       // Apply content color
            }

        })

    }

    useEffect(() => {

        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        const defaultVoice = voices.find((voice) => voice.default);
        setVoiceIndex({ i: 0, name: defaultVoice.name })

        setVoice(defaultVoice)


        voices.forEach((e) => {
            VoiceStoreArray.push({ voices: e });
        })
    }, [])


    useEffect(() => {

        const allReadableEl = document.querySelectorAll(".readable");
        setStoreReadableEl(allReadableEl);

    }, [])


    let synth = window.speechSynthesis;

    function readText(storeVoiceIndex) {

        if (synth.speaking) synth.cancel();

        let text;

        if (storeVoiceIndex >= StoreReadableEl.length) {

            text = "No text available";
        }
        else {
            const element = StoreReadableEl[storeVoiceIndex];

            StoreReadableEl.forEach(e => {

                e.classList.remove("outline");

                if (e === element) {
                    e.classList.add("outline")

                    if (theme == "light") {
                        if (e.classList.contains("outline-white")) {
                            e.classList.remove("outline-white")
                        }
                        e.classList.add("outline-black");

                    }
                    else {
                        if (e.classList.contains("outline-black")) {
                            e.classList.remove("outline-black")
                        }
                        e.classList.add("outline-white")
                    }

                }


            })

            text = element?.innerText || element?.getAttribute("aria-label") || "No text available"; // Get inner text or aria-label as fallback

            // If the element is a link, add "link" to the text
            if (element?.tagName.toLowerCase() === 'a') {
                text += " link";
            }
        }


        const utterance = new SpeechSynthesisUtterance(text);

        utterance.voice = newvoice;
        synth.speak(utterance);

        utterance.onend = () => {
            setSpeachstart(false)
            // Add any additional code you want to run after speech ends
        };

    }

    const changeVoice = () => {
        setshowDropdownVoice(!showDropdownVoice)
    }

    const handleSelectLang = (e, index) => {
        setVoice(e);
        setVoiceIndex({ i: index, name: e.name })
        if (synth.speaking) synth.cancel();

        let selectedText = e.name;
        const utterance1 = new SpeechSynthesisUtterance(selectedText);

        utterance1.voice = e;
        synth.speak(utterance1);

    }

    useEffect(() => {
        if (hasMounted.current) { // Only run if not the initial render
            readText(count);
        } else {
            hasMounted.current = true;
        }
    }, [count])


    let TextReaderOpenClose;

    function showTextReader() {

        if (textReader) {
            TextReaderOpenClose = false;
            setTextReader(TextReaderOpenClose);

        }
        else {
            TextReaderOpenClose = true;
            setTextReader(TextReaderOpenClose);
        }


        localStorage.setItem("textreader", TextReaderOpenClose)

    }

    function NextWord() {
        setSpeachstart(true)

        if (count < StoreReadableEl.length) {
            setCount(count + 1);
        }

    }

    function PrevWord() {
        setSpeachstart(true)
        if (count > 0) {
            setCount(count - 1);
        }
    }


    function play() {

        setSpeachstart(!speachStart);


        if (count < 0) {
            readText(0)
        }
        else {
            readText(count)
        }
    }



    //cursor

    const bigCursor = () => {


        if (cursor) {
            bodyEl.classList.remove("cursor1");
            setCursor(false);
        }
        else {
            bodyEl.classList.add("cursor1");
            setCursor(true)

        }
    }

    //saturation

    const saturationLevelName = ["Saturation", "Low Saturation", "High Saturation", "Desaturation"];


    const handleSaturation = () => {

        setSaturation((prevSaturation) => {


            if (prevSaturation < 3) {
                return prevSaturation + 1;
            } else {
                return 0;
            }
        });

    }


    useEffect(() => {

        if (saturation == 1 || saturation == 2 || saturation == 3) {
            localStorage.setItem("saturationLevel", saturation)
        }

        if (saturation == 1) {

            if (mainEl) {
                mainEl.style.filter = "saturate(0.5)"; // equivalent to saturate-[0.5]
            }

            // mainEl?.classList.remove("saturate-[3]");
            // mainEl?.classList.remove("saturate-[0]");

        }
        else if (saturation == 2) {

            if (mainEl) {
                mainEl.style.filter = "saturate(3)"; // equivalent to saturate-[0.5]
            }
        }
        else if (saturation == 3) {
            if (mainEl) {
                mainEl.style.filter = "saturate(0)"; // equivalent to saturate-[0.5]
            }


        }
        else {


            if (mainEl) {
                mainEl.style.filter = ""; // equivalent to saturate-[0.5]
            }

            localStorage.removeItem("saturationLevel")
        }

    }, [saturation, mainEl])



    const handleContrast = () => {
        //light contrast color background #ffff
        //light contrast color foreground #0000FF


        //dark contrast color forground color #11C01C;
        //dark contrast color background color 000000;        

        setContrast((prevContrast) => {
            if (prevContrast < 3) {
                return prevContrast + 1;
            }
            else {
                return 0;
            }
        })

    }


    useEffect(() => {

        if (contrast == 1 || contrast == 2 || contrast == 3) {
            localStorage.setItem("setcontrast", contrast)
        }
        else {
            localStorage.setItem("setcontrast", 0)
        }

        // if (mainEl && contrast > 0) {

        //     mainEl.style.filter = "";
        //     setSaturation(0);
        //     localStorage.setItem("saturationLevel", 0);

        // }

        if (contrast == 1) {
            // mainEl?.classList.add("invert")

            if (mainEl) {
                mainEl.style.filter = "invert(1)"
            }
            setContrastText("Color Invert")
        }
        else if (contrast == 2) {
            ColorContrast({ backgroundcolor: "#000", headingcolor: "#11C01C", contentcolor: "#11C01C" })
            setContrastText("Dark Contrast")
        }
        else if (contrast == 3) {
            ColorContrast({ backgroundcolor: "#fff", headingcolor: "#0000ff", contentcolor: "#0000ff" });
            setContrastText("Light Contrast");
        }
        else {
            setContrastText("Contrast")
            ColorContrast({ backgroundcolor: "", headingcolor: "", contentcolor: "" })
            localStorage.removeItem("setcontrast")
        }


    }, [contrast, storeFont])


    const ColorContrast = ({ backgroundcolor, headingcolor, contentcolor }) => {




        storeFont.map((el) => {

            if (["header", "footer", "section", "div"].includes(el.tagname)) {
                el.element.style.backgroundColor = `${backgroundcolor}`;  // Apply background color
            }
            else if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(el.tagname)) {
                el.element.style.color = `${headingcolor}`;
            }
            else if (["p", "span", "li", "a", "article", "address", "label"].includes(el.tagname)) {
                el.element.style.color = `${contentcolor}`;       // Apply content color
            }

        })
    }

    const handleCloseTextReaderDropdown = () => {

        const newDropdownState = !textReaderDropdown;

        localStorage.setItem("setTextReaderDropdownState", newDropdownState)
        setTextReaderDropdown(newDropdownState);


    }

    return {
        // handleClick,
        IncreaseFontSize,
        handleClickPlugin,
        setShowCustomModal,
        showCustomModal,
        closeCustomModal,
        customModalAnim,
        DecreaseFontSize,
        maxIncreament,
        updateInc,
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
        saturationLevelName,
        saturation,
        handleContrast,
        contrast,
        contrastText,
        setTextReaderDropdown,
        textReaderDropdown,
        handleCloseTextReaderDropdown
    }
}

export default useCustomPlugin