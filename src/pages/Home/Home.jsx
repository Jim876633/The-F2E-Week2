import { HomeStyle } from "./Home.style";
import Image from "../../components/Image/Image";
import { bg } from "../../shared/imageList";
import { Route, Routes } from "react-router-dom";
import File from "./File/File";
import Upload from "./Upload/Upload";
import Card from "../../components/Card/Card";
import { FileHeader } from "../../components/Header/Header";
import SignDone from "./Upload/SignDone";
import SignFile from "./Upload/SignFile";
import Error from "../Error/Error";
import { FileStyle } from "./File/File.style";

const Home = ({ currentState, prevState, nextState }) => {
    return (
        <HomeStyle>
            <Image src={bg} />
            <Card w="80%" h="90%" center={true}>
                <Routes>
                    <Route path="/" element={<File />} />
                    <Route
                        element={
                            <FileStyle>
                                <FileHeader
                                    title={currentState}
                                    prevState={prevState}
                                    nextState={nextState}
                                />
                            </FileStyle>
                        }
                    >
                        <Route path="upload" element={<Upload />} />
                        <Route path="sign" element={<SignFile />} />
                        <Route path="finish" element={<SignDone />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </Card>
        </HomeStyle>
    );
};

export default Home;
