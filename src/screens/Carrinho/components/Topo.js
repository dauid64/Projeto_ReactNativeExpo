import React from "react";
import {Image, StyleSheet, Dimensions} from 'react-native';

import topo from '../../../../assets/topo.png';

import Texto from "../../../components/Texto";

const width = Dimensions.get('screen').width;

export default function Topo ({titulo}){
    return  <>
            <Image source={topo} style={estilos.topo}/>
            <Texto style={estilos.carrinho}> {titulo} </Texto>
            </>
}

const estilos = StyleSheet.create({
    topo:{
        width:'100%',
        height: 582/772*width,
    },
    carrinho:{
        position:'absolute',
        padding: 20,
        textAlign:'center',
        width: '100%',
        fontSize:20,
        fontWeight: 'bold',
        lineHeight:40,
        color: "black",
    }
})