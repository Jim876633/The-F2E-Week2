import styled, { css } from "styled-components";

export const CardStyle = styled.div`
    ${(props) =>
        props.center
            ? css`
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  margin: auto;
              `
            : ""}
    background: var(--clr-white);
    border-radius: ${(props) => props.r || "4rem"};
    width: ${(props) => props.w || "auto"};
    height: ${(props) => props.h || "auto"};
    padding: 2rem;
    box-shadow: inset 0 -1px 4px var(--shadow-gray-dark),
        0 2px 2px var(--shadow);
    text-align: center;
`;

export const CardFileStyle = styled(CardStyle)`
    cursor: pointer;
    &:hover {
        background: var(--clr-primary-linear);
        box-shadow: inset 0 -1px 4px var(--shadow-primary),
            0 0 2px 3px var(--shadow-primary-dark);
    }
`;

export const CardPageStyle = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    width: 100%;
    background: var(--clr-gray-10);
    border: 2px solid transparent;
    border-radius: 1.5rem;
    padding: 1rem;
    cursor: pointer;
    display: ${(props) => (props.active ? "grid" : "none")};
    &:hover {
        background: var(--shadow-primary);
        border: 2px solid var(--clr-success);
    }
    span {
        position: absolute;
        top: 0.5rem;
        left: 1rem;
    }
`;
