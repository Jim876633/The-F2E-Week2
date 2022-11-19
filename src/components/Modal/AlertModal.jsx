import React from "react";
import { PrimaryButton } from "../Button/Button.style";
import { AlertModalStyle, ButtonListWrap } from "./AlertModal.style";
import alertText from "../../constants/alertText.json";
import { useUiContext } from "../../context/UiContext";

const AlertModal = ({ title, actionHandler }) => {
    const alertItem = alertText[title];

    const { closeModal } = useUiContext();

    return (
        <AlertModalStyle>
            <span>{alertItem?.text}</span>
            <ButtonListWrap>
                <PrimaryButton
                    buttonStyle="secondary"
                    w="100%"
                    onClick={closeModal}
                >
                    {alertItem?.ButtonText1}
                </PrimaryButton>
                <PrimaryButton
                    buttonStyle="primary"
                    w="100%"
                    onClick={actionHandler}
                >
                    {alertItem?.ButtonText2}
                </PrimaryButton>
            </ButtonListWrap>
        </AlertModalStyle>
    );
};

export default AlertModal;
