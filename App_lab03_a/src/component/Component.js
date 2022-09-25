import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import styles from '../themes/Style.js';
import { Button } from '@react-native-material/core';

const Component = () => {

    let soTien = 210;

    const [soLuong, setsoLuong] = useState(1);
    const [thanhTien, setthanhTien] = useState(soTien);
    const [formatThanhTien, setformatThanhTien] = useState(soTien.toString()+ '.');


    function getAddNumber() {
        let a = soLuong + 1;

        let monkey = soTien * a;
        setthanhTien(monkey);
        
        formatMokey(monkey);
        return a;
    }
    function getMinusNumber() {
        if (soLuong === 1) {
            setthanhTien(soTien);
            formatMokey(soTien);
            return 1;
        }
        let a = soLuong - 1;
        let monkey = soTien * a;
        setthanhTien(monkey);
        formatMokey(monkey);
        return a;
    }
    function formatMokey(monkey) {
        let a = monkey.toString();
        let str = '';
        let x = 0;
        if (a >= 1000) {
            for (var key of a) {

                switch (a.length % 3) {
                    case 1:
                        x++;
                        if (x == 1) {
                            str += key + ".";
                        }
                        else {
                            str += key + "";
                        }

                        if(x == 3)
                        {
                            x = 0;
                        }
                        break;
                    case 2:
                        x++;
                        if (x == 2) {
                            str += key + ".";
                        }
                        else {
                            str += key + "";
                        }

                        if(x == 3)
                        {
                            x = 0;
                        }
                        break;
                    case 0:
                        x++;
                        if (x == 3) {
                            str += key + ".";
                        }
                        else {
                            str += key + "";
                        }

                        if(x == 3)
                        {
                            x = 0;
                        }
                        break;

                    default:
                        str += key;
                        break;
                }
                // str += key + ".";
            }
        }
        else{
            str += a + ".";
        }
        setformatThanhTien(str);
    }
    return (
        <View style={styles.bgImage} >
            <StatusBar style="auto" />
            <View style={[styles.contentHeader, styles.flex_4]}>
                {/*  */}
                <View style={[styles.ctHeaderTop, styles.flex_1]}>
                    <View style={[styles.flex_1,]}>
                        <Image source={require('../images/book.png')} />
                    </View>
                    <View style={[styles.titleHeader, styles.flex_2]}>
                        <Text style={[styles.font_text,]}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={[styles.font_text, { marginTop: 10 }]}>Cung cấp bởi Tiki Trading </Text>
                        <Text style={[styles.txtGiaHeader,]} >{formatThanhTien}000 đ</Text>
                        <Text style={[styles.txtGiaHeader2,]} >210.000 đ</Text>
                        <View style={[{ height: 30, marginTop: 5, width: '100%' }, styles.row]}>
                            <TouchableOpacity onPress={() => { setsoLuong(getMinusNumber()) }}>
                                <Image source={require('../images/btnminus.png')}
                                    style={[{}]} />
                            </TouchableOpacity>

                            <Text style={[{ marginHorizontal: 10, paddingBottom: 2, fontSize: 14, fontWeight: 'bold' }]}>{soLuong}</Text>
                            <TouchableOpacity onPress={() => { setsoLuong(getAddNumber()) }}>
                                <Image source={require('../images/btnadd.png')} />
                            </TouchableOpacity>
                            <Text style={[{ position: 'absolute', right: 10, color: "#134FEC" }]} >Mua sau</Text>
                        </View>
                    </View>
                </View>
                {/*  */}
                <View style={[styles.ctHeaderFooter, styles.flex_1]}>
                    <View style={[styles.row]}>
                        <Text style={[styles.font_text]}>Mã giảm giá đã lưu</Text>
                        <Text style={[{ color: "#134FEC", marginLeft: 20, fontSize: 12, fontWeight: 'bold' }]} >Xem tại đây</Text>
                    </View>
                    <View style={[{ marginTop: 45, }]}>
                        <View style={[{}, styles.row]}>
                            <View style={[{ borderWidth: 1, borderColor: '#808080', padding: 10, }, styles.flex_1, styles.row]}>
                                <View style={[{ backgroundColor: 'yellow', width: 40, marginRight: 10, height: "100%" }]}></View>
                                <Text style={[{ fontSize: 18, fontWeight: 'bold' },]}>Mã giảm giá</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={[{ marginLeft: 20, padding: 10, fontSize: 18, fontWeight: 'bold', color: '#fff', marginRight: 5, backgroundColor: '#0A5EB7' }]}>Áp dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </View>
            <View style={[styles.contentCenter1, styles.flex_1]}>
                <Text style={[{ padding: 15, paddingTop: 20, backgroundColor: '#fff', height: 60, }, styles.font_text]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={[{ position: 'absolute', right: 10, color: "#134FEC", paddingTop: 20, fontSize: 13 }]} >Nhập tại đây?</Text>

            </View>
            <View style={[styles.contentCenter2, styles.flex_2]}>
                <View style={[styles.row,
                { justifyContent: 'space-between', minHeight: 50, width: '100%', backgroundColor: '#fff', padding: 15 }]}>
                    <Text style={[{ fontSize: 18, fontWeight: 'bold', }]}>Tạm tính</Text>
                    <Text style={[{ fontSize: 18, fontWeight: 'bold', color: '#EE0D0D', paddingRight: 20 }]} >{formatThanhTien}000 đ</Text>
                </View>

            </View>
            <View style={[styles.contentFooter, styles.flex_2]}>
                <View style={[styles.row,
                { justifyContent: 'space-between', marginTop: 10, minHeight: 50, width: '100%', padding: 15 }]}>
                    <Text style={[{ fontSize: 18, fontWeight: 'bold', color: '#808080' }]}>Thành tiền</Text>
                    <Text style={[{ fontSize: 18, fontWeight: 'bold', color: '#EE0D0D', paddingRight: 20 }]} >{formatThanhTien}000 đ</Text>
                </View>
                <View style={[styles.view_center, { marginTop: 20, }]}>
                    <TouchableOpacity style={[
                        { minWidth: 320, backgroundColor: 'red', padding: 10 }]} >
                        <Text style={[{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold', }]}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



export default Component;