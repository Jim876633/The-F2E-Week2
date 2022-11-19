import React, { useState } from "react";
import { useFileContext } from "../../context/FileContext";
import { close_s } from "../../shared/imageList";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { CloseLayout, SignatureStyle } from "./Signature.style";

const Signature = ({ id, url, dragUrl }) => {
    const [showRemove, setShowRemove] = useState(false);

    const { removeSignature } = useFileContext();

    return (
        <SignatureStyle
            onClick={() => {
                setShowRemove((prev) => !prev);
            }}
            draggable={true}
            onDragStart={() => {
                dragUrl.current = url;
            }}
            onTouchStart={() => {
                dragUrl.current = url;
            }}
        >
            <CloseLayout showRemove={showRemove}>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        removeSignature(id);
                    }}
                >
                    <Image src={close_s} w="3rem" />
                </Button>
            </CloseLayout>
            <Button title="signature" w="100%" h="100%">
                <Image src={url} h="100%" w="100%" />
            </Button>
        </SignatureStyle>
    );
};

export default Signature;
