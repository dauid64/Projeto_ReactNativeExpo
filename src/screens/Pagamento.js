import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Input } from 'react-native-elements';
import React, {useState} from 'react';
import Texto from '../components/Texto';
import mock from '../mocks/carrinho';
import Item from '../screens/Carrinho/components/item';

export default function Pagamento(){

    const [numero_do_cartao, set_numero_do_cartao] = useState(null)
    const [CEP, setCEP] = useState(null)

    return(
        <View>
            <Input
            placeholder='Numero do cartão'
            leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
            onChangeText={value => set_numero_do_cartao(value)}
           
            />
            <Input
            placeholder='CEP'
            leftIcon={{ type: 'font-awesome', name: 'map' }}
            onChangeText={value => setCEP(value)}
            />
            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.pagar}>Pagar</Texto>
            </TouchableOpacity>
            <Texto style={estilos.itens}>Itens:</Texto>
            <FlatList
            data = {mock.itens.lista}
            renderItem = {Item}
            keyExtractor = {({nome})=> nome}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor: '#ffa500',
        paddingVertical:16,
        borderRadius:6,
    },
    pagar:{
        textAlign:'center',
        fontSize: 18,
        fontWeight:'bold',
        color:'#fff',
        lineHeight:20,
    },
    itens:{
        fontSize:18,
        paddingVertical:20,
        fontWeight:'bold',
    }
})

