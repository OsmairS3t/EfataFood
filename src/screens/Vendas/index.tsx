import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IVenda } from '../../utils/interface';
import { keyVendas } from '../../utils/keystorage';

import {
    Container,
    GroupButton,
    GroupButtonTitle,
    ButtonBack,
    ButtonNew,
    IconNew,
    GroupMain,
    Field,
    BtnDate,
    IconDate,
    Title,
    GroupSell,
    Venda,
    Detalhes,
    GroupTitle,
    DateTitle,
    Produto,
    Valor,
    Quant,
    Total,
    TextTotal,
} from './styles';

export function Vendas() {
    const navigation = useNavigation();
    const [dateSell, setDateSell] = useState(new Date(Date.now()));
    const [show, setShow] = useState(false);
    const [vendas, setVendas] = useState<IVenda[]>([]);
    const [totVendas, setTotVendas] = useState(0);
    const [vlrVendas, setVlrVendas] = useState(0);
    const [isDateFiltered, setIsDateFiltered] = useState(false);
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

    function handleVenderProdutos() {
        navigation.navigate('produtos');
    }

    function handleBackHome() {
        navigation.navigate('home');
    }

    async function loadSells() {
        const response = await AsyncStorage.getItem(keyVendas);
        const sellData: IVenda[] = response ? JSON.parse(response) : [];
        const filteredSellData: IVenda[] = sellData.filter(item => (Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(Date.parse(item.datavenda.toString())))===(Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(Date.parse(dateSell.toString()))));
        
        setVendas(filteredSellData);
        let quantVendas = 0;
        let valorVendas = 0;
        filteredSellData.map((item) => {
            quantVendas += item.quant;
            valorVendas += item.total;
        })
        setTotVendas(quantVendas)
        setVlrVendas(valorVendas);
    }
    useEffect(() => {
        loadSells();
    }, [dateSell]);

    return (
        <Container>
            <GroupMain>
                <Header icon='logout' title='VENDAS DIÁRIAS' />
                <GroupButton>
                    <ButtonBack onPress={handleBackHome}>
                        <IconNew name='arrow-left' size={25} />
                        <GroupButtonTitle>VOLTAR</GroupButtonTitle>
                    </ButtonBack>

                    <ButtonNew onPress={handleVenderProdutos}>
                        <GroupButtonTitle>NOVA</GroupButtonTitle>
                        <IconNew name='plus-circle' size={25} />
                    </ButtonNew>
                </GroupButton>

                <Field>
                    <Title>Data da venda: {dateFormatted}</Title>
                    <BtnDate onPress={showDatepicker}>
                        <IconDate name='calendar' size={25} />
                    </BtnDate>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dateSell}
                            mode='date'
                            display='default'
                            onChange={onChange}
                        />
                    )}
                </Field>

                <GroupSell>
                    <FlatList
                        data={vendas}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Venda>
                                <GroupTitle>
                                    <Produto>{item.produto.nome}</Produto>
                                    <DateTitle>
                                        { Intl.DateTimeFormat('pt-BR', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric'
                                        }).format(Date.parse(item.datavenda.toString()))}
                                    </DateTitle>
                                </GroupTitle>
                                <Detalhes>
                                    <Valor>
                                        Valor: {item.produto.preco.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </Valor>
                                    <Quant>Quant.: {item.quant}</Quant>
                                    <Quant>
                                        Total: {item.total.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </Quant>
                                </Detalhes>
                            </Venda>
                        )}
                    />
                </GroupSell>
            </GroupMain>

            <Total>
                <TextTotal>
                    RESUMO: {totVendas} Vendas -
                    Total: R$ {vlrVendas.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </TextTotal>
            </Total>
        </Container>
    )
}