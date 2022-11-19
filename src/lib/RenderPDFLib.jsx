import { Document, Page, Image, StyleSheet, View } from "@react-pdf/renderer";

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
            <Document>
                {imageList.map((src, i) => (
                    <Page key={i}>
                        <View style={styles.view}>
                            <Image src={src} style={styles.image} />
                        </View>
                    </Page>
                ))}
            </Document>
        );
    }
};

export default RenderPDFLib;
