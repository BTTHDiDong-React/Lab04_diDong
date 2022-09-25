import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 15,
    },
    flex_1: {
        flex: 1,
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    view_center: {
        justifyContent: "center",
        alignItems: "center",
    },
    view_centerTop: {
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },


    // ----------------------------------
    containerHeader: {
    },
    imgPhone: {
        width: '80%',
        height: '90%',
        resizeMode: 'stretch',
    },

    // ----------------------------------
    containerCenter: {
    },

    txtTitle: {
        fontSize: 15,
        marginTop: 5,
    },
    // ----------------------------------
    containerBottom: {
        backgroundColor: '#f00',
    },

})