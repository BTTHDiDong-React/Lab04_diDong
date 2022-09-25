import { View, Text, StatusBar, ImageBackground, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../themes/styleProduct';

const ProductComponent = () => {
    return (
        <View style={[styles.flex_1]} >
            <StatusBar style="auto" />
            <View style={[{}, styles.containerHeader, styles.view_center, styles.flex_3]}>
                <Image style={[{}, styles.imgPhone]}
                    source={require('../images/vs_bac.png')} />
            </View>
            <View style={[{}, styles.containerCenter, styles.view_centerTop, styles.flex_2]}>
                <Text style={[{}, styles.txtTitle]}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={[{ marginTop: 10, alignItems: 'center' }, styles.row]}>
                <View style={[styles.row, {marginRight: 30}]}>
                    <Icon name="star" color="#ff0" size={28} />
                    <Icon name="star" color="#ff0" size={28} />
                    <Icon name="star" color="#ff0" size={28} />
                    <Icon name="star" color="#ff0" size={28} />
                    <Icon name="star" color="#ff0" size={28} />
                </View>
                <Text style={[{}]}>(Xem 828 đánh giá)</Text> 
                </View>
            </View>
            <View style={[{}, styles.containerBottom, styles.flex_1]}>

            </View>

        </View>
    )
}

export default ProductComponent;