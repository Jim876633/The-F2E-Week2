import styled from "styled-components";

export const HomeStyle = styled.main`
    position: relative;
    background: var(--clr-gray-80);
    min-height: calc(100vh - var(--h-nav));
    & > div {
        position: absolute;
        bottom: 0;
    }
`;
