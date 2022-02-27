import logo from '../../assets/logo.png'
//imagens de itens
import antena3g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import nodeMcu from '../../assets/Itens/nodeMcu.png';

const carrinho = {
    topo:{
        titulo:"Detalhes do Carrinho"
    },
    detalhes:{
        titulo:"Kit IOT",
        nomevendedor:"Cloud Shopping",
        logoVendedor: logo,
        desc:" Um kit de iot para alunos iniciantes se aventurarem nas nuvens",
        preco:"R$ 99,90",
        botao:"Comprar",
    },
    itens:{
        titulo:'itens do Carrinho',
        lista:[
            {
                nome:'Antena 2g/3g',
                imagem:antena3g
            },
            {
                nome:'AntenaWifi',
                imagem:antenaWifi,
            },
            {
                nome:'Modem',
                imagem:modem,
            },
            {
                nome:'nodeMcu',
                imagem:nodeMcu,
            },

        ]
    },
}

export default carrinho;