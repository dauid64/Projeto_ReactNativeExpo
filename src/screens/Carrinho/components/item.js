import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';

import Texto from '../../../components/Texto';

export default function Item({item:{nome, imagem}}){
    
    return <>
    <View>
        <Image style={estilos.imagem} source={imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        fontWeight:"bold",
        marginTop:10,
    },
    item:{
        flexDirection:'row',
        borderBottomColor:'#ececec',
        borderBottomWidth:1,
        alignItems:'center',
    },
    imagem:{
        width:40,
        height:40,
    },
    nome:{
        fontSize:16,
    }
})
