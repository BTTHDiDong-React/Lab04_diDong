import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from '../themes/styleColor';

const ColorComponent = ({ navigation, route }) => {

    let vs_bac = require('../images/vs_bac.png');
    let vs_do = require('../images/vs_do.png');
    let vs_den = require('../images/vs_den.png');
    let vs_xanh = require('../images/vs_xanh.png');

    const { linkAnh } = route.params; // mau tu man hinh 1 truyen den
    let linkImg = JSON.stringify(linkAnh);
    const [zClick, setzClick] = useState(0);  // vitri o chon
    const [color, setcolor] = useState(linkImg);
    // console.log(JSON.stringify(linkColor));


    function SendColor() {
        navigation.navigate({
            name: 'ProductComponent',
            params: { post: color },
            merge: true,
        });
    }

    function funSetColor(xColor) { // vitri moi dc chon
        let value;

        switch (xColor) {
            case 0:
                value = vs_bac;
                break;

            case 1:
                value = vs_do;
                break;

            case 2:
                value = vs_den;
                break;

            case 3:
                value = vs_xanh;
                break;

            default:
                break;
        }

        setcolor(value);

        setzClick(xColor);



    }
    return (
        <View style={[{ backgroundColor: '#C4C4C4', }, styles.flex_1]}>
            {/* <Text>ColorComponent</Text> */}
            <View style={[{
                paddingVertical: 10,
                paddingHorizontal: 5,
            }, styles.containerHeader, styles.flex_2, styles.row]} >
                <Image
                    style={[{
                        width: '45%',
                        height: 180,
                        resizeMode: "stretch",
                    }]}
                    source={color} />
                <View style={[{
                    marginLeft: 10,
                    paddingTop: 15,
                    width: '50%',
                }]}>
                    <Text >Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                    <Text style={[{ marginTop: 15, fontSize: 14, }]} >Màu: <Text style={[{ fontWeight: 'bold' }]}> đỏ</Text></Text>
                    <Text style={[{ marginTop: 15, fontSize: 14, }]} >Cung cấp bởi <Text style={[{ fontWeight: 'bold', fontSize: 14 }]}> Tiki Tradding</Text></Text>
                    <Text style={[{ fontWeight: 'bold', marginTop: 15, fontSize: 18 }]}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={[{
                paddingHorizontal: 15,
                paddingVertical: 10,
            }, styles.containerFooter, styles.flex_6]} >
                <Text style={[{ fontSize: 16, }]} >Chọn một màu bên dưới:</Text>

                <View style={[{}, styles.view_center]}   >
                    <TouchableOpacity style={[{ marginTop: 15, width: 100, height: 100, backgroundColor: '#C5F1FB' }]}
                        onPress={() => { funSetColor(0) }}
                    ></TouchableOpacity>
                    <TouchableOpacity style={[{ marginTop: 15, width: 100, height: 100, backgroundColor: '#f00' }]}
                        onPress={() => { funSetColor(1) }}
                    ></TouchableOpacity>
                    <TouchableOpacity style={[{ marginTop: 15, width: 100, height: 100, backgroundColor: '#000' }]}
                        onPress={() => { funSetColor(2) }}
                    ></TouchableOpacity>
                    <TouchableOpacity style={[{ marginTop: 15, width: 100, height: 100, backgroundColor: '#234896' }]}
                        onPress={() => { funSetColor(3) }}
                    ></TouchableOpacity>
                </View>

                <TouchableOpacity style={[{
                    marginTop: 20,
                    marginHorizontal: 5,
                    backgroundColor: '#4D6EC1',
                    borderRadius: 10,
                }, styles.view_centerTop]}
                    onPress={() => { SendColor() }}
                >
                    <Text style={[{ padding: 8, color: '#fff', fontSize: 18, fontWeight: 'bold', }]}  >XONG</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default ColorComponent;