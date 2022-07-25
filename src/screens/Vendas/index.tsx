import React, { useState } from 'react';
import { CardSell } from '../../components/CardSell';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Header } from '../../components/Header';
import { SelectProduct } from '../../components/SelectProduct';

import {
    Container,
    GroupMain,
    Field,
    BtnDate,
    IconDate,
    Title,
    GroupSell,
    Total,
    TextTotal,
} from './styles';

export function Vendas() {
    const [dateSell, setDateSell] = useState(new Date(Date.now()));
    const [show, setShow] = useState(false);
    const [totVendas, setTotVendas] = useState(0);
    const [vlrVendas, setVlrVendas] = useState(0);
    const [vendidos, setVendidos] = useState(0);
    const dateFormatted = Intl.DateTimeFormat('pt-BR',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(dateSell);

    const onChange = (event, selectedDate) => {
        setShow(false);
        setDateSell(selectedDate);
    };
    const showDatepicker = () => {
        setShow(true);
    };

    function handlePlus() {
        setTotVendas(totVendas + 1);
        setVendidos(vendidos + 1);
        setVlrVendas(vlrVendas + 1);
    }

    function handleMinus() {
        setTotVendas(totVendas - 1);
        setVendidos(vendidos - 1);
        setVlrVendas(vlrVendas - 1);
    }

    return (
        <Container>
            <GroupMain>
                <Header icon='logout' title='VENDAS' />
                <Field>
                    <Title>Data da venda: {dateFormatted}</Title>
                    <BtnDate onPress={showDatepicker}>
                        <IconDate name='calendar' size={25} />
                    </BtnDate>
                </Field>
                <GroupSell>
                    <SelectProduct />
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
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateSell}
                    mode='date'
                    display='default'
                    onChange={onChange}
                />
            )}
        </Container>
    )
}