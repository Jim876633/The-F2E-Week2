import React, { useContext, useRef, useState } from "react";
import { useMatch } from "react-router-dom";

const UiContext = React.createContext();

export const UiContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const modalTypeRef = useRef();

    const alertTitleRef = useRef();

    const matchState = useMatch("/*")?.params["*"];

    const openModal = (type) => {
        switch (type) {
            case "alert":
                modalTypeRef.current = "alert";
                alertTitleRef.current = matchState;
                break;
            case "signature":
                modalTypeRef.current = "signature";
                break;
            case "image":
                modalTypeRef.current = "image";
                break;
            case "createFileAlert":
                modalTypeRef.current = "createFile";
                alertTitleRef.current = "finish";
                break;
            case "archiveAlert":
                modalTypeRef.current = "alert";
                alertTitleRef.current = "archive";
                break;
            case "trashAlert":
                modalTypeRef.current = "alert";
                alertTitleRef.current = "delete";
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const contextValue = {
        showModal,
        modalTypeRef,
        alertTitleRef,
        openModal,
        closeModal,
    };
    return (
        <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
    );
};

export const useUiContext = () => {
    return useContext(UiContext);
};
