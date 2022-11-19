import { useRef } from "react";
import { useFileContext } from "../../../context/FileContext";
import {
    page,
    page_h,
    pic,
    pic_h,
    sign,
    sign_h,
    text,
    text_h,
} from "../../../shared/imageList";
import {
    AddSignatureWrap,
    ButtonList,
    FileWrap,
    SignatureWrap,
    SignFileStyle,
} from "./SignFile.style";

import SignatureType from "../../../components/Signature/SignatureType";
import SignatureList from "../../../components/Signature/SignatureList";

import FileCanvas from "../../../components/Canvas/FileCanvas";
import FilePreviewCanvas from "../../../components/Canvas/FilePreviewCanvas";
import Card from "../../../components/Card/Card";

const buttonList = [
    {
        id: "sign",
        title: "簽名",
        img: sign,
        hoverImg: sign_h,
        emptyText: "新增簽名檔",
    },
    {
        id: "pic",
        title: "圖片",
        img: pic,
        hoverImg: pic_h,
        emptyText: "新增圖片",
    },
    {
        id: "text",
        title: "文字",
        img: text,
        hoverImg: text_h,
        emptyText: "新增常用文字",
    },
    { id: "page", title: "頁數", img: page, hoverImg: page_h },
];

const SignFile = () => {
    const { fileList, totalPage, getCurrentPage } = useFileContext();

    const dragUrl = useRef();

    return (
        <SignFileStyle>
            <AddSignatureWrap>
                <ButtonList>
                    {buttonList.map((item, i) => {
                        return <SignatureType key={i} item={item} />;
                    })}
                </ButtonList>
                <SignatureWrap>
                    <SignatureList dragUrl={dragUrl} buttonList={buttonList} />
                    {fileList
                        ? Array.from(new Array(totalPage), (_, i) => (
                              <Card
                                  key={i}
                                  type="page"
                                  onClick={() => {
                                      getCurrentPage(i);
                                  }}
                              >
                                  <span>{i + 1}.</span>
                                  <FilePreviewCanvas
                                      index={i}
                                      file={fileList.file}
                                      height={100}
                                  />
                              </Card>
                          ))
                        : ""}
                </SignatureWrap>
            </AddSignatureWrap>
            <hr />
            <FileWrap>
                <FileCanvas dragUrl={dragUrl} />
            </FileWrap>
        </SignFileStyle>
    );
};

export default SignFile;
