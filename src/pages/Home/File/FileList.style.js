import styled, { css } from "styled-components";

export const FileListStyle = styled.div`
    position: relative;
    height: 100%;
    padding: 3rem;
    overflow-y: auto;
`;

export const FileListWrap = styled.div`
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    ${(props) =>
        props.fileStyle === "card"
            ? css`
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(20rem, 23%));
                  justify-content: center;
              `
            : ""}
`;

export const EmptyWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Caption = styled.div`
    display: flex;
    gap: 15rem;
`;

export const ViewButtons = styled.div`
    position: absolute;
    top: 2rem;
    right: 4rem;
    display: flex;
    gap: 1rem;
`;
