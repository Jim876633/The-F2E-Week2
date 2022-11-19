import styled, { css } from "styled-components";
export const LoadingWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    text-align: center;
    gap: 2rem;
    h5 {
        display: block;
    }
    img {
        width: 20rem;
        object-fit: contain;
    }
    ${(props) =>
        props.center
            ? css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
              `
            : ""}
`;
