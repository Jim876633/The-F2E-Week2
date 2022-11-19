import { useEffect, useRef, useState } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import { useFileContext } from "../../context/FileContext";

const SignCanvas = ({
    x,
    y,
    src,
    id,
    page,
    width,
    height,
    selectHandler,
    isSelected,
}) => {
    const { changeDragImageList, dragImageList } = useFileContext();

    const [img] = useImage(src);

    const imageRef = useRef();

    const trRef = useRef();

    useEffect(() => {
        if (img) {
            changeDragImageList(page, id, {
                x,
                y,
                src,
                id,
                height: img.height / 2,
                width: img.width / 2,
            });
        }
    }, [img]);

    useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([imageRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
            <Image
                image={img}
                ref={imageRef}
                x={x}
                y={y}
                width={width}
                height={height}
                offsetX={width ? width / 2 : 0}
                offsetY={height ? height / 2 : 0}
                draggable
                onClick={() => {
                    selectHandler(page, id);
                }}
                onDragEnd={(e) => {
                    changeDragImageList(page, id, {
                        x: e.target.x(),
                        y: e.target.y(),
                        src,
                        id,
                        width,
                        height,
                    });
                }}
                onTransformEnd={() => {
                    const node = imageRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    // reset to scale1
                    node.scaleX(1);
                    node.scaleY(1);
                    changeDragImageList(page, id, {
                        x: node.x(),
                        y: node.y(),
                        src,
                        id,
                        width: Math.max(10, node.width() * scaleX),
                        height: Math.max(10, node.height() * scaleY),
                    });
                }}
            />
            {isSelected ? (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 10 || newBox.height < 10) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default SignCanvas;
