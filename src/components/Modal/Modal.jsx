import ReactDOM, { createPortal } from "react-dom";
import { useMatch, useNavigate } from "react-router-dom";
import { useFileContext } from "../../context/FileContext";
import { useUiContext } from "../../context/UiContext";
import Card from "../Card/Card";
import AlertModal from "./AlertModal";
import { ModalStyle } from "./Modal.style";
import SignatureModal from "./SignatureModal";
import UploadModal from "./UploadModal";

const Modal = () => {
    const { closeModal, modalTypeRef, alertTitleRef } = useUiContext();

    const { createFileHandler, changeCreateFileStatus } = useFileContext();

    const navigate = useNavigate();

    const alertActionHandler = () => {
        switch (alertTitleRef.current) {
            case "upload":
                navigate("/");
                break;
            case "sign":
                navigate("upload");
                break;
            case "finish":
                navigate("sign");
                break;
            case "archive":
                changeCreateFileStatus("archive");
                navigate("/");
                break;
            case "delete":
                changeCreateFileStatus("trash");
                navigate("/");
                break;
        }
        closeModal();
    };

    const createActionHandler = () => {
        createFileHandler();
        closeModal();
        navigate("finish");
    };

    let alertTitle;
    let alertContent;
    switch (modalTypeRef.current) {
        case "signature":
            alertTitle = "建立簽名檔";
            alertContent = <SignatureModal />;
            break;
        case "image":
            alertTitle = "新增圖片";
            alertContent = <UploadModal />;
            break;
        case "alert":
            alertTitle = "警告";
            alertContent = (
                <AlertModal
                    title={alertTitleRef.current}
                    actionHandler={alertActionHandler}
                />
            );
            break;
        case "createFile":
            alertTitle = "創建檔案";
            alertContent = (
                <AlertModal
                    title={alertTitleRef.current}
                    actionHandler={createActionHandler}
                />
            );
    }
    return createPortal(
        <ModalStyle>
            <Card>
                <h5>{alertTitle}</h5>
                <hr />
                {alertContent}
            </Card>
        </ModalStyle>,
        document.getElementById("modal")
    );
};

export default Modal;
