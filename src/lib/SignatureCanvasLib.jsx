import styled from "styled-components";
import SignatureCanvas from "react-signature-canvas";

const CanvasWrap = styled.div`
    border: 2px solid var(--clr-gray-30);
    border-radius: 2rem;
    overflow: hidden;
    background: #f5f5f5;
`;

const SignatureCanvasLib = ({ signEventHandler, signColor, canvasRef }) => {
    return (
        <CanvasWrap>
            <SignatureCanvas
                penColor={signColor}
                minWidth={2.5}
                maxWidth={2.5}
                canvasProps={{ width: 660, height: 270 }}
                ref={canvasRef}
                onEnd={() => {
                    signEventHandler();
                }}
                backgroundColor="transparent"
            />
        </CanvasWrap>
    );
};

export default SignatureCanvasLib;
