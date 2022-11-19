import styled, { css } from "styled-components";

export const ButtonWrap = styled.button.attrs((props) => ({
    type: "button",
    title: props.title || "button",
}))`
    width: ${(props) => props.w || "auto"};
    height: ${(props) => props.h || "auto"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.border_r || "none"};
    ${(props) =>
        props.top || props.right
            ? css`
                  position: absolute;
                  top: ${props.top};
                  right: ${props.right};
              `
            : ""};
    &:hover {
        transform: ${(props) => props.hover || "none"};
    }
    &:disabled {
        color: var(--clr-gray-50);
        background: var(--clr-gray-20);
        border: 2px solid var(--clr-gray-30);
        cursor: not-allowed;
        &:hover {
            color: var(--clr-gray-50);
            background: var(--clr-gray-20);
        }
    }
`;

export const PrimaryButton = styled(ButtonWrap)`
    color: var(--clr-gray-70);
    &:hover {
        color: var(--clr-primary);
    }

    ${(props) =>
        props.buttonStyle === "primary"
            ? css`
                  background: var(--clr-gray-70);
                  border: 2px solid var(--clr-primary);
                  border-radius: 10rem;
                  color: var(--clr-primary);
                  padding: 0.5rem 2.5rem;
                  &:hover {
                      background: var(--clr-primary);
                      color: var(--clr-gray-70);
                  }
              `
            : ""}
    ${(props) =>
        props.buttonStyle === "secondary"
            ? css`
                  background: var(--clr-white);
                  border: 2px solid var(--clr-gray-50);
                  border-radius: 10rem;
                  color: var(--clr-gray-50);
                  padding: 0.5rem 2.5rem;
                  &:hover {
                      background: var(--clr-gray-50);
                      color: var(--clr-primary);
                  }
              `
            : ""}
`;

export const TagButton = styled(ButtonWrap)`
    width: 7rem;
    height: 8rem;
    border-radius: 50% 0 0 50%;
    border: 2px solid transparent;
    display: grid;
    place-content: center;
    background: var(--clr-gray-70);
    box-shadow: 0 3px 6px var(--shadow), inset -2px 0 4px var(--shadow);
    & > * {
        width: 4rem;
        margin-left: 1rem;
    }
    &:hover {
        background: var(--clr-white);
        border: 2px solid var(--clr-primary);
        border-right: transparent;
    }
    ${(props) =>
        props.active
            ? css`
                  background: var(--clr-white);
                  border: 2px solid var(--clr-primary);
                  border-right: transparent;
              `
            : ""}
`;

export const InputButton = styled(PrimaryButton)`
    padding: 0;
    label {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        color: var(--clr-primary);
        padding: 0.5rem 2.5rem;
        transition: all 0.5s;
    }
    &:hover label {
        color: var(--clr-gray-70);
    }
`;
