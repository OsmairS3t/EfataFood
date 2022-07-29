import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
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

    function handleBackHome() {
        navigation.navigate('home');
    }

    async function loadSells() {
        const response = await AsyncStorage.getItem(keyVendas);
        const sellData: IVenda[] = response ? JSON.parse(response) : [];
        //const filteredData = sellData.filter(item => item.datavenda === dateSell);
        //console.log(filteredData)
        setVendas(sellData);
        console.log(sellData)
    }
    useEffect(() => {
        loadSells();
    }, []);

    return (
        <Container>
            <GroupMain>
                <Header icon='logout' title='VENDAS DIÁRIAS' />
                <GroupButton>
                    <ButtonBack onPress={handleBackHome}>
                        <IconNew name='arrow-left' size={25} />
                        <GroupButtonTitle>VOLTAR</GroupButtonTitle>
                    </ButtonBack>

                    <ButtonNew onPress={() => { }}>
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
                        style={{ flex: 1, width: '100%' }}
                        renderItem={({ item }) => (
                            <Venda>
                                <Produto>{item.produto.nome}</Produto>
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
                <TextTotal>{totVendas} Vendas - Total: R$ {vlrVendas}</TextTotal>
            </Total>
        </Container>
    )
}