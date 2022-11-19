import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Layer, Stage, Image } from "react-konva";
import { useFileContext } from "../../context/FileContext";
import SignCanvas from "./SignCanvas";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import Loading from "../Loading/Loading";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FileCanvasWrap = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    overflow: auto;
    .page-lg {
        display: none;
    }
`;
const CanvasWrap = styled.section`
    display: grid;
    place-content: center;
    width: 70rem;
    height: 90rem;
    background: var(--clr-gray-30);
    div {
        display: grid;
        place-content: center;
    }
`;

const FileCanvas = ({ dragUrl }) => {
    const {
        totalPage,
        fileList,
        currentPage,
        addFileCanvas,
        canvasList,
        clearCanvasList,
        dragImageList,
        dropImageHandler,
        stageRefs,
    } = useFileContext();

    const [selectedImage, setSelectedImage] = useState({});

    const selectHandler = (page, id) => {
        setSelectedImage((prev) => {
            return { ...prev, page, id };
        });
    };

    const canvasRefs = useMemo(
        () =>
            Array(totalPage)
                .fill(0)
                .map((i) => React.createRef()),
        []
    );

    useEffect(() => {
        return () => {
            clearCanvasList();
        };
    }, []);

    return (
        <FileCanvasWrap>
            {fileList
                ? Array.from(new Array(totalPage), (_, i) => {
                      return (
                          <Document
                              key={"hidden-" + i}
                              file={fileList.file}
                              loading=""
                          >
                              <Page
                                  className="page-lg"
                                  pageNumber={i + 1}
                                  height={2000}
                                  canvasRef={canvasRefs[i]}
                                  onRenderSuccess={() => {
                                      addFileCanvas(i, canvasRefs[i].current);
                                  }}
                                  onRenderError={(error) => {
                                      console.log(error.message);
                                  }}
                              />
                          </Document>
                      );
                  })
                : ""}
            {canvasList.length === totalPage ? (
                Array.from(new Array(totalPage), (_, i) => {
                    const item = canvasList.find((el) => el.index === i);
                    const imgObj = dragImageList.find((el) => el.id === i);
                    return (
                        <CanvasWrap
                            key={i}
                            // onDrop  need onDragover
                            onDragOver={(e) => {
                                e.preventDefault();
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                dropImageHandler(e, i, dragUrl);
                            }}
                        >
                            <Stage width={595} height={842} ref={stageRefs[i]}>
                                <Layer>
                                    <Image
                                        width={595}
                                        height={842}
                                        x={0}
                                        y={0}
                                        image={item.canvas}
                                        onClick={() => {
                                            selectHandler(0, 0);
                                        }}
                                    />
                                    {/*drop in image */}
                                    {imgObj
                                        ? imgObj.srcList.map((item) => {
                                              return (
                                                  <SignCanvas
                                                      key={item.id}
                                                      {...item}
                                                      page={imgObj.id}
                                                      isSelected={
                                                          selectedImage.page ===
                                                              imgObj.id &&
                                                          selectedImage.id ===
                                                              item.id
                                                      }
                                                      selectHandler={
                                                          selectHandler
                                                      }
                                                  />
                                              );
                                          })
                                        : null}
                                </Layer>
                            </Stage>
                        </CanvasWrap>
                    );
                })
            ) : (
                <Loading />
            )}
        </FileCanvasWrap>
    );
};

export default FileCanvas;
