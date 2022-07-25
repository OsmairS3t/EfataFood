import React, { useState } from 'react';
import { Modal } from 'react-native';
import { CardSell } from '../../components/CardSell';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Header } from '../../components/Header';
import { SelectProduct } from '../../components/SelectProduct';
import { ListaProdutos } from '../ListaProdutos';
import { IProduto } from '../../utils/interface';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [produto, setProduto] = useState<IProduto>(null);
    const [nomeProduto, setNomeProduto] = useState('Selecione o Produto');
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

    function handleOpenSelectProduct(){
        setIsModalOpen(true);
    }

    function handleCloseSelectProduct(){
        setIsModalOpen(false);
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
                    <SelectProduct 
                        produto={nomeProduto}
                        onPress={handleOpenSelectProduct} 
                    />
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

            <Modal visible={isModalOpen}>
                <ListaProdutos setProduct={setProduto} onClose={handleCloseSelectProduct} />
            </Modal>
        </Container>
    )
}