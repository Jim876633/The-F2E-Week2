import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import { useFileContext } from "../../context/FileContext";
import { useUiContext } from "../../context/UiContext";
import useHover from "../../hooks/useHover";
import RenderPDFLib from "../../lib/RenderPDFLib";
import {
    archive,
    archive_h,
    download,
    download_h,
    trash,
    trash_h,
} from "../../shared/imageList";
import Button from "../Button/Button";
import { PrimaryButton } from "../Button/Button.style";
import Image from "../Image/Image";
import {
    ButtonListWrap,
    FileHeaderStyle,
    Header,
    StateDot,
    StateHeaderStyle,
} from "./Header.style";

const HeaderFileControlButton = ({ title, srcList }) => {
    const { fileList, createFileList } = useFileContext();
    const { hover, hoverHandler } = useHover();
    const { openModal } = useUiContext();

    const buttonClickHandler = () => {
        console.log("hi");
        if (title == "archive") openModal("archiveAlert");
        if (title == "trash") openModal("trashAlert");
    };

    if (title == "download" && fileList && createFileList.at(-1).filePages) {
        return (
            <PDFDownloadLink
                document={
                    <RenderPDFLib imageList={createFileList.at(-1).filePages} />
                }
                fileName={fileList.title}
            >
                <Button enter={hoverHandler} leave={hoverHandler} title={title}>
                    <Image
                        srcList={srcList}
                        hover={hover}
                        w="3rem"
                        h="3rem"
                        active={false}
                    />
                </Button>
            </PDFDownloadLink>
        );
    }
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
                active={false}
            />
        </Button>
    );
};

const buttonList = [
    { title: "download", srcList: [download, download_h] },
    { title: "archive", srcList: [archive, archive_h] },
    { title: "trash", srcList: [trash, trash_h] },
];

export const FileHeader = ({ title, prevState, nextState }) => {
    const { fileList, dragImageList } = useFileContext();
    const { openModal, closeModal } = useUiContext();

    const matchState = useMatch("/*")?.params["*"];

    const navigate = useNavigate();

    const redirectHandler = () => {
        switch (matchState) {
            case "upload":
                navigate("sign");
                break;
            case "sign":
                openModal("createFileAlert");
                break;
            case "finish":
                navigate("/");
                break;
        }
    };

    const isDisabled = () => {
        if (nextState === "finish" && dragImageList.length === 0) {
            return true;
        }
        return !nextState || !fileList || fileList.title === "";
    };

    return (
        <>
            <FileHeaderStyle>
                <Header>
                    {matchState !== "finish" ? (
                        <PrimaryButton
                            onClick={() => {
                                openModal("alert");
                            }}
                        >
                            &larr; 上一步
                        </PrimaryButton>
                    ) : (
                        <PrimaryButton
                            buttonStyle="primary"
                            onClick={redirectHandler}
                        >
                            &larr; 回首頁
                        </PrimaryButton>
                    )}
                    <h3>{title}</h3>
                    {matchState !== "finish" ? (
                        <PrimaryButton
                            buttonStyle="primary"
                            disabled={isDisabled()}
                            onClick={redirectHandler}
                        >
                            下一步 &rarr;
                        </PrimaryButton>
                    ) : (
                        <ButtonListWrap>
                            {buttonList.map((item, i) => (
                                <HeaderFileControlButton key={i} {...item} />
                            ))}
                        </ButtonListWrap>
                    )}
                </Header>
                <hr />
            </FileHeaderStyle>
            <Outlet />
        </>
    );
};

export const UploadStateHeader = ({ stateListTitle, activeIndex }) => {
    return (
        <StateHeaderStyle>
            {stateListTitle.map((state, i) => (
                <StateDot
                    key={i}
                    data-state={state}
                    index={i}
                    activeIndex={activeIndex}
                />
            ))}
        </StateHeaderStyle>
    );
};
