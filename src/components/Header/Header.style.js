import styled, { css } from "styled-components";

export const FileHeaderStyle = styled.div`
    width: 100%;
    hr {
        margin-block: 1rem;
        border: 1px solid var(--clr-primary);
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StateHeaderStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30rem;
    height: var(--h-nav);
    margin: auto;
`;

export const StateDot = styled.span`
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid var(--clr-gray-40);
    border-radius: 50%;
    background: transparent;
    margin-top: -1.5rem;

    &::after {
        content: attr(data-state);
        display: block;
        word-break: keep-all;
        width: 8rem;
        font-size: var(--fz-capation);
        color: var(--clr-gray-40);
        text-align: center;
        transform: translate(calc(-50% + 0.6rem), 1.6rem);
    }
    & + &::before {
        content: "";
        position: absolute;
        right: calc(1.6rem - 2px);
        top: calc(50% - 1px);
        width: calc((30rem - 1.6rem * 3) / 2);
        height: 2px;
        background-image: linear-gradient(
            90deg,
            var(--clr-primary) 0%,
            var(--clr-primary) 50%,
            var(--clr-gray-40) 50%
        );
        background-size: 200%;
        background-position: right;
        transition: all 0.5s;
    }
    ${(props) => {
        if (props.index === props.activeIndex) {
            return css`
                border: 2px solid var(--clr-primary);
                box-shadow: 0 0 0 4px var(--shadow-primary);
                transition: all 0.2s 0.5s;
                &::before {
                    background-position: left !important;
                }
            `;
        } else if (props.activeIndex > props.index) {
            return css`
                border: 2px solid var(--clr-primary);
                background: var(--clr-primary);
                transition: all 0.2s;
                &::before {
                    background-position: left !important;
                }
            `;
        }
    }};
`;

export const ButtonListWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    a {
        display: grid;
        place-content: center;
    }
`;
