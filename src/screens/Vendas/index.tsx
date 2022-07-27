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
    BtnNewSell,
    IconNewSell,
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totVendas, setTotVendas] = useState(0);
    const [vlrVendas, setVlrVendas] = useState(0);
    const [produto, setProduto] = useState<IProduto>({
        id: 'selecione',
        nome: 'Selecione o Produto',
        ingredientes: '',
        preco: 0,
        foto: ''
    });
    const dateFormatted = Intl.DateTimeFormat('pt-BR', {
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

    function handleOpenSelectProduct() {
        setIsModalOpen(true);
    }

    function handleCloseSelectProduct() {
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
                    <BtnNewSell>
                        <IconNewSell name='plus-circle' size={25} />
                    </BtnNewSell>
                </Field>
                <GroupSell>
                    <SelectProduct
                        produto={produto.nome}
                        onPress={handleOpenSelectProduct}
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
                <ListaProdutos
                    setProduct={setProduto}
                    onClose={handleCloseSelectProduct}
                />
            </Modal>
        </Container>
    )
}