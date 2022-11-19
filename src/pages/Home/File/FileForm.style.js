import styled from "styled-components";

export const FileFormStyle = styled.div`
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    width: 30rem;
    border: 1px solid var(--clr-gray-20);
    border-radius: 10rem;
    overflow: hidden;
    margin: auto;
    input {
        width: 100%;
        border: none;
        &::placeholder {
            color: var(--clr-gray-20);
        }
        &:hover,
        &:focus {
            outline: none;
            border: none;
        }
    }
`;
