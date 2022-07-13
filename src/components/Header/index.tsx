import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Logotipo,
    BtnIcon,
    Icon,
    Title
} from './styles';

interface Props {
    icon: string;
    title: string;
}
export function Header({icon, title}:Props) {
    const navigation = useNavigation();
    
    function handleLogout() {
        navigation.navigate('login');
    }

    return (
        <Container>
            <Logotipo source={require('../../assets/logotipoeb.png')} />
            <Title>{title}</Title>
            <BtnIcon onPress={handleLogout}><Icon name={icon} size={30} /></BtnIcon>
        </Container>
    )
}
