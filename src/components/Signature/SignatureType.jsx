import React from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { useFileContext } from "../../context/FileContext";
import useHover from "../../hooks/useHover";
import { ButtonWrap } from "./SignatureType.style";

const SignatureType = ({ item }) => {
    const { hover, hoverHandler } = useHover();
    const { signatureType, signatureTypeHandler } = useFileContext();

    const buttonClickHandler = () => {
        if (item.id !== signatureType) {
            signatureTypeHandler(item.id);
        }
    };

    return (
        <ButtonWrap
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            onClick={buttonClickHandler}
        >
            <Button>
                <Image
                    srcList={[item.img, item.hoverImg]}
                    hover={hover}
                    w="3rem"
                    h="3rem"
                    active={signatureType === item.id}
                />
            </Button>
            <span>{item.title}</span>
        </ButtonWrap>
    );
};

export default SignatureType;
