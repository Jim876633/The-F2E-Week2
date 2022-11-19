import { HoverTransition } from "../../lib/Transition";
import { ImageWrap } from "./Image.style";
const Image = ({ src, srcList, h, w, alt, hover, active }) => {
    return (
        <ImageWrap w={w} h={h}>
            {srcList && !active ? (
                srcList.map((src, i) => {
                    return (
                        <HoverTransition key={i} hover={i ? hover : !hover}>
                            <img src={src} alt={alt || ""} />
                        </HoverTransition>
                    );
                })
            ) : (
                <img src={src || srcList[1]} alt={alt || ""} />
            )}
        </ImageWrap>
    );
};

export default Image;
