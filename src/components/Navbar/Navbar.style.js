import styled from "styled-components";

export const NavbarStyle = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    height: var(--h-nav);
    background: var(--clr-black);
    padding-inline: 2rem;
    & > * {
        flex-shrink: 0;
    }
    & > *:first-child {
        margin-right: auto;
    }
    & > *:last-child {
        margin-left: 1.6rem;
    }
`;
