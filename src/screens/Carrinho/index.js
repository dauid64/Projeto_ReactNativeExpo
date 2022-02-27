import React from 'react';

import Detalhes from './components/Deatlhes';
import Topo from './components/Topo';
import Item from './components/item'
import { FlatList } from 'react-native';
import mock from '../../mocks/carrinho';

export default function Carrinho (){
    return  <>
        <FlatList
            data = {mock.itens.lista}
            renderItem = {Item}
            keyExtractor = {({nome})=> nome}
            ListHeaderComponent={
                () => {
                    return <>
                            <Topo {...mock.topo}/>
                            <Detalhes {...mock.detalhes}/>     
                        </>
                }
            }
        />
            </>
}
