import { useCallback, useEffect, useRef, useState } from "react";
import { useFileContext } from "../../context/FileContext";
import { useUiContext } from "../../context/UiContext";
import useHover from "../../hooks/useHover";
import SignatureCanvasLib from "../../lib/SignatureCanvasLib";
import {
    color_black,
    color_black_h,
    color_blue,
    color_blue_h,
    color_red,
    color_red_h,
    trash,
    trash_h,
} from "../../shared/imageList";
import Button from "../Button/Button";
import { PrimaryButton } from "../Button/Button.style";
import Image from "../Image/Image";
import { ButtonListWrap, SignatureModalStyle } from "./SignatureModal.style";

const buttonList = [
    { title: "black", color: "black", srcList: [color_black, color_black_h] },
    { title: "blue", color: "blue", srcList: [color_blue, color_blue_h] },
    { title: "red", color: "red", srcList: [color_red, color_red_h] },
    { title: "clear", srcList: [trash, trash_h] },
];
const SignatureButton = ({
    srcList,
    title,
    signButtonHandler,
    clearHandler,
    signColor,
}) => {
    const { hover, hoverHandler } = useHover();
    const buttonClickHandler = () => {
        if (title === "clear") {
            clearHandler();
        } else if (title !== signColor) {
            signButtonHandler(title);
        }
    };
    return (
        <Button
            enter={hoverHandler}
            leave={hoverHandler}
            onClick={buttonClickHandler}
            title={title}
        >
            <Image
                srcList={srcList}
                hover={hover}
                w="3rem"
                h="3rem"
                active={signColor === title}
            />
        </Button>
    );
};

const SignatureModal = () => {
    const { closeModal } = useUiContext();
    const [isSign, setIsSign] = useState(false);
    const [signColor, setSignColor] = useState("black");
    const { addSignature } = useFileContext();

    const canvasRef = useRef();

    const signEventHandler = () => {
        setIsSign(true);
    };

    const signButtonHandler = (color) => {
        setSignColor(color);
    };

    const clearHandler = () => {
        setIsSign(false);
        canvasRef.current.clear();
    };

    const saveCanvasHandler = () => {
        const imageUrl = canvasRef.current.toDataURL("image/svg");
        addSignature("sign", { id: Date.now(), url: imageUrl });
        closeModal();
    };

    return (
        <SignatureModalStyle>
            <ButtonListWrap>
                {buttonList.map((item) => (
                    <SignatureButton
                        key={item.title}
                        srcList={item.srcList}
                        title={item.title}
                        signColor={signColor}
                        signButtonHandler={signButtonHandler}
                        clearHandler={clearHandler}
                    />
                ))}
            </ButtonListWrap>
            <SignatureCanvasLib
                signEventHandler={signEventHandler}
                signColor={signColor}
                isSign={isSign}
                canvasRef={canvasRef}
            />
            <ButtonListWrap>
                <PrimaryButton
                    buttonStyle="secondary"
                    w="100%"
                    onClick={closeModal}
                >
                    取消
                </PrimaryButton>
                <PrimaryButton
                    buttonStyle="primary"
                    w="100%"
                    disabled={!isSign}
                    onClick={saveCanvasHandler}
                >
                    確定
                </PrimaryButton>
            </ButtonListWrap>
        </SignatureModalStyle>
    );
};

export default SignatureModal;
