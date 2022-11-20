import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Image from "../../../components/Image/Image";

import {
    file_item,
    archive,
    trash,
    download,
    reduction,
    file_item_h,
    download_h,
    archive_h,
    trash_h,
    reduction_h,
} from "../../../shared/imageList";
import { ButtonListWrap, FileItemStyle } from "./FileItem.style";
import useHover from "../../../hooks/useHover";
import { useFileContext } from "../../../context/FileContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RenderPDFLib from "../../../lib/RenderPDFLib";
const getControlButtons = (tag) => {
    switch (tag) {
        case "file":
            return [
                { title: "download", srcList: [download, download_h] },
                { title: "archive", srcList: [archive, archive_h] },
                { title: "trash", srcList: [trash, trash_h] },
            ];
        case "archive":
            return [
                { title: "file", srcList: [reduction, reduction_h] },
                { title: "trash", srcList: [trash, trash_h] },
            ];
        case "trash":
            return [{ title: "file", srcList: [reduction, reduction_h] }];
        default:
            return;
    }
};

const ButtonList = ({ title, srcList, clickHandler }) => {
    const { hover, hoverHandler } = useHover();
    const { createFileList } = useFileContext();
    if (title === "download") {
        return (
            <PDFDownloadLink
                document={
                    <RenderPDFLib imageList={createFileList.at(-1).filePages} />
                }
                fileName={createFileList.title}
            >
                <Button enter={hoverHandler} leave={hoverHandler} title={title}>
                    <Image
                        srcList={srcList}
                        hover={hover}
                        w="4rem"
                        h="4rem"
                        active={false}
                    />
                </Button>
            </PDFDownloadLink>
        );
    }
    return (
        <Button
            title={title}
            enter={hoverHandler}
            leave={hoverHandler}
            onClick={clickHandler}
        >
            <Image
                srcList={srcList}
                alt={title}
                w="4rem"
                h="4rem"
                hover={hover}
            />
        </Button>
    );
};

const FileItem = ({ tag, date, time, title, filePages, status, fileStyle }) => {
    //hover state
    const { hover, hoverHandler } = useHover();

    const { changeCreateFileStatus } = useFileContext();

    const controlButons = getControlButtons(tag).map((item) => (
        <ButtonList
            key={item.title}
            {...item}
            clickHandler={() => {
                changeCreateFileStatus(item.title, item.id);
            }}
        />
    ));

    return (
        <Card
            r="2rem"
            h="100%"
            type="file"
            enter={hoverHandler}
            leave={hoverHandler}
        >
            <FileItemStyle fileStyle={fileStyle}>
                {fileStyle === "card" ? (
                    <div style={{ border: "1px solid var(--clr-gray-30)" }}>
                        <Image src={filePages[0]} w="10rem" />
                    </div>
                ) : (
                    <Image
                        srcList={[file_item, file_item_h]}
                        alt={status}
                        hover={hover}
                        w="4rem"
                        h="4rem"
                    />
                )}
                <p>{date}</p>
                <p>{time}</p>
                <p>{title}</p>
                <ButtonListWrap>{controlButons}</ButtonListWrap>
            </FileItemStyle>
        </Card>
    );
};

export default FileItem;
