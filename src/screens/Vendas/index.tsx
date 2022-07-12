import React from 'react';
import { CardSell } from '../../components/CardSell';

import { Header } from '../../components/Header'
import {
    Container,
    Total,
    TextTotal,
} from './styles';

export function Vendas() {
    return (
        <Container>
            <Header icon='logout' title='VENDAS' />
            <CardSell />
            <Total>
                <TextTotal>Total: R$ 99,99</TextTotal>
            </Total>
        </Container>
    )
}