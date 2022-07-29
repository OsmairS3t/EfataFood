import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    LogoTipo,
    GroupButton,
    ButtonSend,
    IconButton,
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
                    <IconButton name='archive' size={30} />
                    <TextButton>Produtos</TextButton>
                </ButtonSend>
                <ButtonSend onPress={handleSell}>
                    <IconButton name='dollar-sign' size={30} />
                    <TextButton>Vendas</TextButton>
                </ButtonSend>
            </GroupButton>
        </Container>
    )
}
