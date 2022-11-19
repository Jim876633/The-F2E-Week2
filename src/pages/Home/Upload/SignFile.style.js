import styled from "styled-components";

export const SignFileStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 0; //fix overlow problem in flex-box . Amazing !!!
`;

export const AddSignatureWrap = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 40%;
    padding: 1rem 2rem;
    gap: 1rem;
`;

export const ButtonList = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 2rem;
`;

export const SignatureWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100%;
    padding: 2rem;
    background: var(--clr-secondary-tint);
    border-radius: 2rem;
    overflow: auto;
`;

export const FileWrap = styled.div`
    width: 100%;
    height: 100%;
`;
