import { FileStyle, TagList } from "./File.style";
import { useState } from "react";
import FileList from "./FileList";
import FileForm from "./FileForm";
import Button from "../../../components/Button/Button";
import { file_h, archive_h, trash_h, add_t } from "../../../shared/imageList";
import { useFileContext } from "../../../context/FileContext";

const tagList = [
    { tag: "file", title: "我的文件", image: file_h },
    { tag: "archive", title: "已封存的文件", image: archive_h },
    { tag: "trash", title: "垃圾桶", image: trash_h },
];
const File = () => {
    const { createFileList } = useFileContext();

    const [tagItem, setTagItem] = useState(tagList[0]);

    const filterFileList = createFileList.filter(
        (el) => el.status === tagItem.tag
    );

    const tagClickHandler = (i) => {
        setTagItem(tagList[i]);
    };

    return (
        <FileStyle>
            <h3>{tagItem.title}</h3>
            <hr />
            {filterFileList.length ? <FileForm /> : ""}
            <FileList tag={tagItem.tag} filterList={filterFileList} />
            <TagList>
                {tagList.map((item, index) => (
                    <Button
                        key={item.tag}
                        type="tag"
                        active={tagItem.tag === item.tag}
                        onClick={() => tagClickHandler(index)}
                    >
                        <img src={item.image} alt={item.title} />
                    </Button>
                ))}
            </TagList>
            <Button
                type="link"
                w="8rem"
                top="3rem"
                right="-4rem"
                href="upload"
                hover="scale(0.9)"
            >
                <img src={add_t} alt="add file" />
            </Button>
        </FileStyle>
    );
};

export default File;
