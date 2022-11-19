import { useFileContext } from "../../context/FileContext";
import { CardFileStyle, CardPageStyle, CardStyle } from "./Card.style";

const Card = ({ type, children, w, h, r, center, enter, leave, onClick }) => {
    const { signatureType } = useFileContext();

    if (type === "page") {
        return (
            <CardPageStyle onClick={onClick} active={signatureType === "page"}>
                {children}
            </CardPageStyle>
        );
    }
    if (type === "file") {
        return (
            <CardFileStyle
                w={w}
                h={h}
                r={r}
                center={center}
                onMouseEnter={enter}
                onMouseLeave={leave}
            >
                {children}
            </CardFileStyle>
        );
    }
    return (
        <CardStyle
            w={w}
            h={h}
            r={r}
            center={center}
            onMouseEnter={enter}
            onMouseLeave={leave}
        >
            {children}
        </CardStyle>
    );
};

export default Card;
