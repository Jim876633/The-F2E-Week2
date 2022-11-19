import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FilePreviewCanvas = ({ file, index, height, onLoadSuccess }) => {
    return (
        <Document file={file} onLoadSuccess={onLoadSuccess}>
            <Page pageNumber={index ? index + 1 : 1} height={height} />
        </Document>
    );
};

export default FilePreviewCanvas;
