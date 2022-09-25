import { StyleSheet } from "react-native";


const Style = StyleSheet.create({
    bgImage: {
        backgroundColor: "#C4C4C4",
        width: '100%',
        height: '100%'
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
    flex_4: {
        flex: 4,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    view_center: {
        justifyContent: "center",
        alignItems: "center"
    },

    //
    contentHeader: {
        backgroundColor: '#fff',
    },
    ctHeaderTop: {
        padding: 10,
        flexDirection: 'row',
    },
    titleHeader: {
        marginLeft: 5,
    },

    font_text: {
        fontSize: 13, 
        fontWeight: 'bold',
    },
    txtGiaHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f00',
        marginTop: 10,
    },
    txtGiaHeader2: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#808080',
        marginTop: 5,
        textDecorationLine: 'line-through',
    },
    btn: {
        Textcolor:"#000",
        fontSize:  5,
        backgroundColor: '#00f',
    },
    
    ctHeaderFooter: {
        marginHorizontal: 10,
    },

    ///
    contentCenter1: {
        marginTop: 15,
    },
    contentCenter2: {
        // backgroundColor: '#0ff',
    },
    contentFooter: {
        backgroundColor: '#fff',
    },

    //
    
})

export default Style;