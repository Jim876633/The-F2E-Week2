import { useState } from "react";
import Button from "../../../components/Button/Button";
import Image from "../../../components/Image/Image";
import useHover from "../../../hooks/useHover";
import {
    add_d,
    card,
    card_h,
    img_archive,
    img_trash,
    list,
    list_h,
} from "../../../shared/imageList";
import FileItem from "./FileItem";
import {
    Caption,
    EmptyWrap,
    FileListStyle,
    FileListWrap,
    ViewButtons,
} from "./FileList.style";

const buttonList = [
    { title: "list", srcList: [list, list_h] },
    { title: "card", srcList: [card, card_h] },
];

const ButtonList = ({ title, srcList, active, changeStyle }) => {
    const { hover, hoverHandler } = useHover();
    return (
        <Button
            title={title}
            enter={hoverHandler}
            leave={hoverHandler}
            onClick={() => {
                changeStyle(title);
            }}
        >
            <Image
                srcList={srcList}
                alt={title}
                w="4rem"
                h="4rem"
                hover={hover}
                active={active}
            />
        </Button>
    );
};

const FileList = ({ tag, filterList }) => {
    const [showFileStyle, setShowFileStyle] = useState("list");

    const changeFileListStyle = (title) => {
        setShowFileStyle(title);
    };

    const tagEmptyItem = () => {
        switch (tag) {
            case "file":
                return (
                    <>
                        <Button
                            title="add file"
                            hover="scale(0.9)"
                            type="link"
                            href="upload"
                        >
                            <Image src={add_d} />
                        </Button>
                        <h2>快來建立新檔吧</h2>
                    </>
                );
            case "archive":
                return (
                    <>
                        <Image src={img_archive} />
                        <h5>沒有任何項目</h5>
                        <p>封存的項目會顯示在這裡</p>
                    </>
                );
            case "trash":
                return (
                    <>
                        <Image src={img_trash} />
                        <h5>沒有任何項目</h5>
                        <p>刪除的項目會顯示在這裡</p>
                    </>
                );
            default:
                return;
        }
    };

    if (filterList.length === 0) {
        return (
            <FileListStyle>
                <EmptyWrap>{tagEmptyItem()}</EmptyWrap>
            </FileListStyle>
        );
    }

    return (
        <FileListStyle>
            <Caption>
                <span>建立時間</span>
                <span>專案名稱</span>
            </Caption>
            <FileListWrap fileStyle={showFileStyle}>
                {filterList.map((item) => (
                    <FileItem
                        key={item.id}
                        tag={tag}
                        {...item}
                        fileStyle={showFileStyle}
                    />
                ))}
            </FileListWrap>
            <ViewButtons>
                {buttonList.map((item) => (
                    <ButtonList
                        key={item.title}
                        {...item}
                        changeStyle={changeFileListStyle}
                        active={showFileStyle === item.title}
                    />
                ))}
            </ViewButtons>
        </FileListStyle>
    );
};

export default FileList;
