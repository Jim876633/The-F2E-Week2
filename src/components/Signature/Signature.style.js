import styled, { css } from "styled-components";

export const SignatureStyle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 2rem;
    overflow: hidden;
    background: var(--clr-white);
    height: 10rem;
`;

export const CloseLayout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--clr-primary);
    border-radius: 2rem;
    background: var(--shadow-primary-dark);
    display: ${(props) => (props.showRemove ? "block" : "none")};
    button {
        top: 0.5rem;
        left: 0.5rem;
        position: absolute;
    }
    z-index: 1;
`;
