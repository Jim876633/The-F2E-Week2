import {
    Document as MyDocument,
    Page as MyPage,
    Image,
    StyleSheet,
    View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        objectFit: "fill",
    },
    view: {
        display: "flex",
        height: "100%",
        width: "100%",
        position: "relative",
    },
});

const RenderPDFLib = ({ imageList }) => {
    if (imageList) {
        return (
            <MyDocument>
                {imageList.map((src, i) => (
                    <MyPage key={i}>
                        <View style={styles.view}>
                            <Image src={src} style={styles.image} />
                        </View>
                    </MyPage>
                ))}
            </MyDocument>
        );
    }
};

export default RenderPDFLib;
