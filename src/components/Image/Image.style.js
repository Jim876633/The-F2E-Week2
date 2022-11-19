import styled, { css } from "styled-components";

export const ImageWrap = styled.div`
    position: relative;
    width: ${(props) => props.w || "auto"};
    height: ${(props) => props.h || "auto"};
    opacity: 1;
    pointer-events: none;
    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .node-enter {
        opacity: 0;
    }
    .node-enter-active {
        transition: opacity 0.5s;
        opacity: 1;
    }
    .node-exit {
        opacity: 1;
    }
    .node-exit-active {
        transition: opacity 0.5s;
        opacity: 0;
    }
`;
