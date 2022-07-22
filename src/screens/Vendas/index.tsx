import React, { useState } from 'react';
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
    const [totVendas, setTotVendas] = useState(0);
    const [vlrVendas, setVlrVendas] = useState(0);
    const [vendidos, setVendidos] = useState(0);

    function handlePlus() {
        setTotVendas(totVendas+1);
        setVendidos(vendidos +1);
        setVlrVendas(vlrVendas+1);
    }

    function handleMinus() {
        setTotVendas(totVendas-1);
        setVendidos(vendidos-1);
        setVlrVendas(vlrVendas-1);
    }

    return (
        <Container>
            <GroupMain>
                <Header icon='logout' title='VENDAS' />
                <Title>Data da venda: 99/99/9999</Title>
                <GroupSell>
                    <CardSell 
                        vendidos={vendidos}
                        setPlus={handlePlus}
                        setMinus={handleMinus}
                    />
                </GroupSell>
            </GroupMain>
            
            <Total>
                <TextTotal>{totVendas} Vendas - Total: R$ {vlrVendas}</TextTotal>
            </Total>
        </Container>
    )
}