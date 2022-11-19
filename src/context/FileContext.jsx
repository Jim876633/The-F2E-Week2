import React, { useContext, useMemo, useState } from "react";

const FileContext = React.createContext();

export const FileContextProvider = ({ children }) => {
    const [fileList, setFileList] = useState(null);

    const [totalPage, setTotalPage] = useState(null);

    const [canvasList, setCanvasList] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [signatureType, setSignatureType] = useState("sign");

    const [signImageObj, setSignImageObj] = useState({});

    const [createFileList, setCreateFileList] = useState([]);

    // dragImageList = [{id:0,srcList[{x,y,src},{x,y,src}]},{...},{...}]
    const [dragImageList, setDragImageList] = useState([]);

    const signImageList = signImageObj[signatureType];

    const stageRefs = useMemo(
        () =>
            Array(totalPage)
                .fill(0)
                .map((i) => React.createRef()),
        [totalPage]
    );

    //========================================
    //Fuction
    //========================================

    const fileUploadHandler = (e) => {
        const uploadFile = e.target.files[0];
        if (!uploadFile.type.includes("/pdf")) {
            console.log("no");
            return;
        }
        const newFile = {
            title: uploadFile.name.slice(0, -4),
            size: uploadFile.size,
            type: uploadFile.type,
            time: uploadFile.lastModified,
            file: uploadFile,
        };
        setFileList(newFile);
    };

    const removeFileHandler = () => {
        setFileList(null);
        setTotalPage(null);
    };

    const changeFileName = (newName) => {
        setFileList((prev) => {
            return { ...prev, title: newName };
        });
    };

    const getTotalPage = ({ numPages }) => {
        setTotalPage(numPages);
    };

    const getCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const addFileCanvas = (index, canvas) => {
        setCanvasList((prev) => [...prev, { index, canvas }]);
    };

    const clearCanvasList = () => {
        setCanvasList([]);
        setDragImageList([]);
    };

    const addSignature = (type, obj) => {
        if (signImageObj[type]) {
            const imageList = signImageObj[type];
            imageList.push(obj);
            setSignImageObj((prev) => {
                return { ...prev, [type]: [...imageList] };
            });
        } else {
            setSignImageObj((prev) => {
                return { ...prev, [type]: [obj] };
            });
        }
    };

    const removeSignature = (id) => {
        const newImageList = signImageList.filter((el) => el.id !== id);
        setSignImageObj((prev) => {
            return { ...prev, [signatureType]: newImageList };
        });
    };

    const signatureTypeHandler = (type) => {
        setSignatureType(type);
    };

    const dropImageHandler = (e, pageId, dragUrl) => {
        stageRefs[pageId].current.setPointersPositions(e);
        const prevObj = dragImageList.find((el) => el.id === pageId);
        const restList = dragImageList.filter((el) => el.id !== pageId);
        const prevImageList = prevObj?.srcList ? [...prevObj.srcList] : [];
        const newImageList = [
            ...prevImageList,
            {
                ...stageRefs[pageId].current.getPointerPosition(),
                src: dragUrl.current,
                id: Date.now(),
                width: 0,
                height: 0,
            },
        ];

        setDragImageList([...restList, { id: pageId, srcList: newImageList }]);
    };

    const changeDragImageList = (pageId, id, newObj) => {
        const restPage = dragImageList.filter((item) => item.id !== pageId);

        const restList = dragImageList[pageId].srcList.filter(
            (el) => el.id !== id
        );

        const newSrcList = [...restList, newObj];

        setDragImageList([...restPage, { id: pageId, srcList: newSrcList }]);
    };

    //Add new file to creatfileList
    const createFileHandler = () => {
        const imageList = stageRefs.map((ref) =>
            ref.current.toDataURL({
                //control pixelRatio default is 1
                pixelRatio: 2,
            })
        );
        setCreateFileList((prev) => [
            ...prev,
            {
                id: Date.now(),
                filePages: imageList,
                time: Date.now(),
                title: fileList.title,
                type: fileList.type,
                status: "file",
            },
        ]);
    };

    //
    const changeCreateFileStatus = (status, id) => {
        if (!id) {
            const newFileObj = { ...createFileList.at(-1), status };
            const restList = createFileList.slice(0, -1);
            setCreateFileList([...restList, newFileObj]);
        }
    };

    const contextValue = {
        fileList,
        totalPage,
        canvasList,
        signatureType,
        signImageList,
        currentPage,
        dragImageList,
        stageRefs,
        createFileList,
        fileUploadHandler,
        removeFileHandler,
        changeFileName,
        getTotalPage,
        getCurrentPage,
        addFileCanvas,
        clearCanvasList,
        addSignature,
        removeSignature,
        signatureTypeHandler,
        dropImageHandler,
        changeDragImageList,
        createFileHandler,
        changeCreateFileStatus,
    };
    return (
        <FileContext.Provider value={contextValue}>
            {children}
        </FileContext.Provider>
    );
};

export const useFileContext = () => {
    return useContext(FileContext);
};
