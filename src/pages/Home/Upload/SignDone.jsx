import { useFileContext } from "../../../context/FileContext";
import { SignDoneStyle } from "./SignDone.style";
import Image from "../../../components/Image/Image";

const SignDone = () => {
    const { createFileList } = useFileContext();
    const imageList = createFileList.at(-1)?.filePages;
    return (
        <SignDoneStyle>
            {imageList
                ? imageList.map((src, i) => <Image key={i} src={src} />)
                : ""}
        </SignDoneStyle>
    );
};

export default SignDone;
