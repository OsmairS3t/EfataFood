import React from 'react';
import { CardSell } from '../../components/CardSell';

import { Header } from '../../components/Header'
import {
    Container,
    GroupMain,
    Title,
    GroupSell,
    Total,
    TextTotal,
} from './styles';

export function Vendas() {
    return (
        <Container>
            <GroupMain>
                <Header icon='logout' title='VENDAS' />
                <Title>Data da venda: 99/99/9999</Title>
                <GroupSell>
                    <CardSell />
                </GroupSell>
            </GroupMain>
            
            <Total>
                <TextTotal>99 Vendas - Total: R$ 99,99</TextTotal>
            </Total>
        </Container>
    )
}