import { useState } from "react";

const useHover = () => {
    const [hover, setHover] = useState(false);
    const hoverHandler = () => {
        setHover((prev) => !prev);
    };
    return { hover, hoverHandler };
};

export default useHover;
