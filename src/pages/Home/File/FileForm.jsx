import React from "react";
import Image from "../../../components/Image/Image";
import { search } from "../../../shared/imageList";
import { FileFormStyle } from "./FileForm.style";

const FileForm = () => {
    return (
        <FileFormStyle>
            <Image src={search} height="2rem" />
            <input type="text" placeholder="請輸入關鍵字" />
        </FileFormStyle>
    );
};

export default FileForm;
