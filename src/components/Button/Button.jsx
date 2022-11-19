import { Link } from "react-router-dom";
import {
    ButtonWrap,
    InputButton,
    PrimaryButton,
    TagButton,
} from "./Button.style";

const Button = ({
    type,
    children,
    w,
    h,
    title,
    onClick,
    enter,
    leave,
    active,
    href,
    hover,
    buttonStyle,
    disabled,
    top,
    right,
    id,
    border,
    border_r,
}) => {
    if (type === "link") {
        return (
            <Link to={href}>
                <PrimaryButton
                    w={w}
                    h={h}
                    title={title}
                    top={top}
                    right={right}
                    hover={hover}
                    buttonStyle={buttonStyle}
                    disabled={disabled}
                >
                    {children}
                </PrimaryButton>
            </Link>
        );
    }
    if (type === "tag") {
        return (
            <TagButton onClick={onClick} active={active}>
                {children}
            </TagButton>
        );
    }
    if (type === "input") {
        return (
            <InputButton
                w={w}
                h={h}
                title={title}
                top={top}
                right={right}
                hover={hover}
                buttonStyle={buttonStyle}
                disabled={disabled}
            >
                <label htmlFor={id}>{children}</label>
            </InputButton>
        );
    }
    return (
        <ButtonWrap
            w={w}
            h={h}
            title={title}
            hover={hover}
            onClick={onClick}
            onMouseEnter={enter}
            onMouseLeave={leave}
            active={active}
            top={top}
            right={right}
            border={border}
            border_r={border_r}
        >
            {children}
        </ButtonWrap>
    );
};

export default Button;
