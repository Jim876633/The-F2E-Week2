import styled from "styled-components";

export const FileStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    text-align: left;
    hr {
        margin-block: 1rem;
        border: 1px solid var(--clr-primary);
    }
`;

export const TagList = styled.div`
    position: absolute;
    top: 10%;
    left: 0;
    display: grid;
    gap: 1rem;
    transform: translateX(-100%);
`;
