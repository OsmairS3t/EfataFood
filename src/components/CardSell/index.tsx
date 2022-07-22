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

export function CardSell() {
    return (
        <Container>
            <GroupProduct>
                <ProductPhoto 
                    source={require('../../assets/pao-de-mel.png')} 
                    style={{borderRadius: 50}} 
                />
                <SubGroupProduct>
                    <ProductName>Pão de Mel</ProductName>
                    <ProductPrice>R$ 9,99</ProductPrice>
                </SubGroupProduct>
            </GroupProduct>

            <GroupSell>
                <BtnPlus>
                    <IconPlus name='plus' size={20} />
                </BtnPlus>
                <Amount>0</Amount>
                <BtnMinus>
                    <IconMinus name='minus' size={20} />
                </BtnMinus>
            </GroupSell>
        </Container>
    )
}