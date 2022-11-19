import styled from "styled-components";

export const UploadStyle = styled.div`
    position: relative;
    width: 95%;
    height: 80%;
    margin: auto;
    border: 1px dashed var(--clr-gray-70);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p,
    h5 {
        color: var(--clr-gray-40);
    }
    input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    button {
        z-index: 10;
    }

    &.dragover {
        opacity: 0.6;
    }
`;

export const FileUploadWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-block: 2rem;
    overflow-y: auto;
    & > div:first-child {
        position: relative;
        display: grid;
        place-content: center;
        width: 20rem;
        height: 26rem;
        margin-bottom: 1rem;
        border: 1px solid var(--clr-gray-40);
    }
    button {
        display: grid;
        place-content: center;
        font-size: 1rem;
    }
    P {
        margin-block: auto 1rem;
    }
`;

export const InputWrap = styled.div`
    border: 0.2rem solid var(--clr-gray-70);
    border-radius: 10rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-inline: 1.5rem;
    flex-shrink: 0;
    &:focus-within {
        border: 0.2rem solid var(--clr-success);
        box-shadow: 0 0 4px var(--shadow-primary);
    }
    input {
        border: none;
    }
    input:focus {
        outline: none;
        border: none;
    }
    input:focus ~ div {
        opacity: 0;
    }
`;
