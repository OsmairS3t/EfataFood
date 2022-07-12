import React from 'react';

import {
    Container,
    GroupPay,
    BtnMoney,
    IconMoney,
    BtnCard,
    IconCard,
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
            <GroupPay>
                <BtnMoney>
                    <IconMoney name='dollar-sign' size={20} />
                </BtnMoney>
                <BtnCard>
                    <IconCard name='credit-card' size={20} />
                </BtnCard>
            </GroupPay>

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