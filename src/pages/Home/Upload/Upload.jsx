import { useRef, useState } from "react";
import { pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import Button from "../../../components/Button/Button";
import FilePreviewCanvas from "../../../components/Canvas/FilePreviewCanvas";
import Image from "../../../components/Image/Image";
import { useFileContext } from "../../../context/FileContext";
import { close, close_h, edit, img_photo } from "../../../shared/imageList";
import { FileUploadWrap, InputWrap, UploadStyle } from "./Upload.style";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Upload = () => {
    const {
        fileList,
        fileUploadHandler,
        removeFileHandler,
        getTotalPage,
        totalPage,
        changeFileName,
    } = useFileContext();

    const [hover, setHover] = useState(false);
    const hoverHandler = () => {
        setHover((pre) => !pre);
    };

    const wrapperRef = useRef(null);

    const inputRef = useRef(null);

    const onDragEnter = () => wrapperRef.current.classList.add("dragover");

    const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

    const editInputHandler = () => {
        console.log(inputRef.current.value);
        changeFileName(inputRef.current.value);
    };

    if (fileList) {
        return (
            <FileUploadWrap load={totalPage}>
                <div>
                    <FilePreviewCanvas
                        file={fileList.file}
                        onLoadSuccess={getTotalPage}
                        height={250}
                    />
                    <Button
                        title="remove file"
                        top="-2.5rem"
                        right="-2.5rem"
                        enter={hoverHandler}
                        leave={hoverHandler}
                        onClick={removeFileHandler}
                    >
                        <Image
                            srcList={[close, close_h]}
                            hover={hover}
                            w="2.8rem"
                            h="2.8rem"
                        />
                    </Button>
                </div>
                <h5>{fileList.title}.pdf</h5>
                <span>{totalPage} 頁</span>
                <p>專案名稱</p>
                <InputWrap>
                    <input
                        type="text"
                        defaultValue={fileList.title}
                        ref={inputRef}
                        onChange={editInputHandler}
                    />
                    <Image src={edit} alt="edit" w="3rem" />
                </InputWrap>
            </FileUploadWrap>
        );
    }

    return (
        <UploadStyle
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDragLeave}
        >
            <Image src={img_photo} w="12rem" />
            <Button
                type="input"
                id="file"
                buttonStyle="primary"
                title="upload file"
            >
                <input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={fileUploadHandler}
                />
                選擇檔案
            </Button>
            <h5>或者將檔案拖曳到這裡</h5>
            <p>僅支援 PDF、JPG、PNG 檔案，且容量不超過 20MB。</p>
        </UploadStyle>
    );
};

export default Upload;
