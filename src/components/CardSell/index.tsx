import React from 'react';

import {
    Container,
    GroupProduct,
    ProductPhoto,
    SubGroupProduct,
    ProductName,
    ProductPrice,
    GroupSell,
    BtnPlus,
    IconPlus,
    Amount,
    BtnMinus,
    IconMinus,
} from './styles';

interface Props {
    vendidos: number;
    setPlus: ()=>void;
    setMinus: ()=>void;
}

export function CardSell({vendidos, setPlus, setMinus}:Props) {

    return (
        <Container>
            <GroupProduct>
                <ProductPhoto 
                    source={require('../../assets/pao-de-mel.png')} 
                    style={{borderRadius: 50}} 
                />
                <SubGroupProduct>
                    <ProductName>Pão de Mel</ProductName>
                    <ProductPrice>Unidade: R$ 5,00</ProductPrice>
                    <ProductPrice>Sub-Total: R$ 0,00</ProductPrice>
                </SubGroupProduct>
            </GroupProduct>

            <GroupSell>
                <BtnPlus onPress={setPlus}>
                    <IconPlus name='plus' size={20} />
                </BtnPlus>
                <Amount>{vendidos}</Amount>
                <BtnMinus onPress={setMinus}>
                    <IconMinus name='minus' size={20} />
                </BtnMinus>
            </GroupSell>
        </Container>
    )
}