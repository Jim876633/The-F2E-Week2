import styled from "styled-components";

export const ModalStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    background: var(--modal-bg);
    hr {
        margin-block: 1rem;
        border: 1px solid var(--clr-primary);
    }
    z-index: 100;
`;
