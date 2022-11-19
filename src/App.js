import GlobalStyle from "./shared/GlobalStyle";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useMatch } from "react-router-dom";
import { FileContextProvider } from "./context/FileContext";
import { UiContextProvider, useUiContext } from "./context/UiContext";
import Modal from "./components/Modal/Modal";

const App = () => {
    const { showModal, modalTypeRef, alertTitleRef } = useUiContext();

    const stateObj = {
        upload: "上傳檔案",
        sign: "簽署文件",
        finish: "簽署完成",
    };
    const matchState = useMatch("/*")?.params["*"];

    const stateList = Object.keys(stateObj);

    const stateListTitle = Object.values(stateObj);

    const currentStateValue = stateObj[matchState];

    const activeIndex = stateList.findIndex((el) => el === matchState);

    const prevState = stateList[activeIndex - 1 >= 0 ? activeIndex - 1 : null];

    const nextState =
        stateList[activeIndex + 1 <= stateList.length ? activeIndex + 1 : null];

    return (
        <>
            <GlobalStyle />
            <FileContextProvider>
                {showModal ? <Modal /> : ""}
                <Navbar
                    stateListTitle={stateListTitle}
                    activeIndex={activeIndex}
                />
                <Home
                    currentState={currentStateValue}
                    prevState={prevState}
                    nextState={nextState}
                />
            </FileContextProvider>
        </>
    );
};

export default App;
