import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../themes/styleProduct';

const ProductComponent = ({ navigation, route }) => {

    let vs_color = require('../images/vs_bac.png');

    const [linkImg, setlinkImg] = useState(vs_color);

    // const { itemId, otherParam } = route.params;
    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
          setlinkImg(route.params?.post);
          
        }
      }, [route.params?.post]);
    
    return (
        <View style={[styles.flex_1, {backgroundColor: '#fff'}]} >
            <StatusBar style="auto" />
            <View style={[{}, styles.containerHeader, styles.view_center, styles.flex_3]}>
                <Image style={[{}, styles.imgPhone]}
                    source={linkImg} />
            </View>
            <View style={[{ margin: 35 }, styles.containerCenter, styles.flex_2]}>
                <Text style={[{}, styles.txtTitle]}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={[{ marginTop: 15, alignItems: 'center' }, styles.row]}>
                    <View style={[styles.row, { marginRight: 30 }]}>
                        <Icon name="star" color="#ff0" size={28} />
                        <Icon name="star" color="#ff0" size={28} />
                        <Icon name="star" color="#ff0" size={28} />
                        <Icon name="star" color="#ff0" size={28} />
                        <Icon name="star" color="#ff0" size={28} />
                    </View>
                    <Text style={[{}]}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={[{
                    marginTop: 15, flexDirection: 'row'
                    , justifyContent: 'space-around'
                },]}>
                    <Text style={[{ fontSize: 20, fontWeight: 'bold' }, styles.flex_1, styles.txtmokey]} >1.790.000 đ</Text>
                    <Text style={[{ fontSize: 16, fontWeight: 'bold', textDecorationLine: 'line-through', color: '#919191', marginTop: 5 }, styles.flex_1, styles.txtmokey]} >1.790.000 đ</Text>
                </View>

                <View style={[{ marginTop: 15 }, styles.row]}>
                    <Text style={[{ textAlign: 'left', marginTop: 2, color: '#F00', fontSize: 13, fontWeight: 'bold' }]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Text style={[styles.iconQuestion]}> ? </Text>
                </View>

                <View style={[{
                    minHeight: 40,
                    marginTop: 25,
                }]} >
                    <TouchableOpacity style={[{
                        padding: 10,
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 10,
                    }, styles.row]}
                        onPress={() => { navigation.navigate('ColorComponent', {
                            linkAnh: linkImg,
                          }) }}
                    >
                        <Text style={[{ fontSize: 16, marginLeft: 60 }, styles.flex_1]} >4 MÀU-CHỌN MÀU</Text>
                        {/* <Text> > </Text> */}

                        <Icon name="chevron-right" color="#000" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[{}, styles.containerBottom, styles.view_centerTop, styles.flex_1]}>

                <TouchableOpacity style={[{
                    width: '80%',
                    backgroundColor: '#f00',
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#fff',
                }]} >
                    <Text style={[{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff', }]}>CHỌN MUA</Text>
                </TouchableOpacity>

            </View>
                
        </View>
    )
}

export default ProductComponent;