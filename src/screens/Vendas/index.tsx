import React from 'react';
import { CardSell } from '../../components/CardSell';

import { Header } from '../../components/Header'
import {
    Container,
    GroupMain,
    Total,
    TextTotal,
} from './styles';

export function Vendas() {
    return (
        <Container>
            <GroupMain>
                <Header icon='logout' title='VENDAS' />
                <CardSell />
            </GroupMain>
            
            <Total>
                <TextTotal>99 Vendas - Total: R$ 99,99</TextTotal>
            </Total>
        </Container>
    )
}