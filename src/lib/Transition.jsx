import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const defaultStyle = {
    transition: `opacity .5s `,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export const opacityTransition = { ...defaultStyle, ...transitionStyles };

export const HoverTransition = ({ children, hover }) => {
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            nodeRef={nodeRef}
            timeout={500}
            in={hover}
            unmountOnExit
            classNames="node"
        >
            <div ref={nodeRef}>{children}</div>
        </CSSTransition>
    );
};
