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
    & > *:nth-child(3) {
        margin-inline: 3rem auto;
    }
    span + span {
        margin-left: 1rem;
    }
    ${(props) =>
        props.fileStyle === "card"
            ? css`
                  flex-direction: column;
                  & > *:nth-child(3) {
                      margin-inline: auto;
                  }
                  span {
                      font-size: var(--fz-capation);
                      color: var(--clr-gray-40);
                  }
                  gap: 0.5rem;
              `
            : ""}
`;

export const ButtonListWrap = styled.div``;
