import styled, { css } from "styled-components";

export const FileItemStyle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > *:nth-child(2) {
        margin-inline: 2rem;
    }
    & > *:nth-child(4) {
        margin-inline: 3rem auto;
    }
    ${(props) =>
        props.fileStyle === "card"
            ? css`
                  flex-direction: column;
                  & > *:nth-child(4) {
                      margin-inline: auto;
                  }
                  gap: 1rem;
              `
            : ""}
`;

export const ButtonListWrap = styled.div``;
