import React from "react";
import { loadingGIF } from "../../shared/imageList";
import { LoadingWrap } from "./Loading.style";
const Loading = ({ center }) => {
    return (
        <LoadingWrap center={center}>
            <img src={loadingGIF} />
            <h5>載入中...</h5>
        </LoadingWrap>
    );
};

export default Loading;
