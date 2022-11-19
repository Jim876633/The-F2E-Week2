import React from "react";
import { useFileContext } from "../../context/FileContext";
import { useUiContext } from "../../context/UiContext";
import { EmptyWrap } from "../../pages/Home/File/FileList.style";
import { add_d } from "../../shared/imageList";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Signature from "./Signature";
import { SignatureListWrap } from "./SignatureList.style";

const SignatureList = ({ dragUrl, buttonList }) => {
    const { openModal } = useUiContext();
    const { signatureType, signImageList } = useFileContext();

    const addSignatureHandler = () => {
        openModal("signature");
    };

    if (signImageList && signImageList.length !== 0) {
        return (
            <SignatureListWrap>
                {signImageList.map((item) => (
                    <Signature key={item.id} {...item} dragUrl={dragUrl} />
                ))}
                <Button
                    title="add signature"
                    hover="scale(0.9)"
                    onClick={addSignatureHandler}
                >
                    <Image src={add_d} w="6rem" />
                </Button>
            </SignatureListWrap>
        );
    }

    if (signatureType !== "page") {
        return (
            <EmptyWrap>
                <Button
                    title="add signature"
                    hover="scale(0.9)"
                    onClick={addSignatureHandler}
                >
                    <Image src={add_d} w="6rem" />
                </Button>
                <h5>
                    {buttonList.find((el) => el.id === signatureType).emptyText}
                </h5>
            </EmptyWrap>
        );
    }
    return null;
};

export default SignatureList;
