import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useFileContext } from "../../../context/FileContext";
import RenderPDFLib from "../../../lib/RenderPDFLib";
import Loading from "../../../components/Loading/Loading";
import { SignDoneStyle } from "./SignDone.style";

const SignDone = () => {
    const { createFileList } = useFileContext();
    const [isLoading, setIsLoading] = useState(true);
    const imageList = createFileList.at(-1)?.filePages;
    return (
        <SignDoneStyle>
            {imageList ? (
                <PDFViewer
                    width="100%"
                    height="100%"
                    showToolbar={false}
                    onLoad={() => {
                        setIsLoading(false);
                    }}
                >
                    <RenderPDFLib imageList={imageList} />
                </PDFViewer>
            ) : (
                ""
            )}
            {isLoading ? <Loading center={true} /> : ""}
        </SignDoneStyle>
    );
};

export default SignDone;
