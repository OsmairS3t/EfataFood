import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    LogoTipo,
    GroupButton,
    ButtonSend,
    TextButton,
} from './styles';

export function Home() {
    const navigation = useNavigation();
    function handleProduct() {
        navigation.navigate('produtos');
    }
    
    function handleSell() {
        navigation.navigate('vendas');
    }
    
    return (
        <Container>
            <LogoTipo source={require('../../assets/logotipoeb.png')} />
            <GroupButton>
                <ButtonSend onPress={handleProduct}>
                    <TextButton>Produtos</TextButton>
                </ButtonSend>
                <ButtonSend onPress={handleSell}>
                    <TextButton>Vendas</TextButton>
                </ButtonSend>
            </GroupButton>
        </Container>
    )
}
