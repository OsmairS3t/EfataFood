import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { IProduto, IVenda } from '../../../utils/interface';
import { keyVendas } from '../../../utils/keystorage';
import uuid from 'uuid';

import {
  Container,
  GroupHeader,
  TextBack,
  IconBack,
  Form,
  Field,
  GroupTitle,
  Title,
  Preco,
  Ingredientes,
  Label,
  Quantity,
  GroupPlus,
  BtnMinus,
  IconMinus,
  BtnPlus,
  IconPlus,
  ImgProduto,
  Footer,
  SubTotal
} from './styles';

interface Props {
  produto: IProduto;
  onClose: () => void;
}

export function Vendas({ produto, onClose }: Props) {
  const navigation = useNavigation();
  const [quant, setQuant] = useState(0);
  const amount = quant ? produto.preco * quant : 0;

  function handleBack() {
    navigation.goBack();
  }

  function handlePlus() {
    setQuant(quant + 1);
  }
  function handleMinus() {
    setQuant(quant - 1);
  }

  async function handleSubmitSell() {
    const newData:IVenda = {
      id: String(uuid.v4()),
      produto: {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        ingredientes: produto.ingredientes,
        foto: produto.foto
      },
      datavenda: new Date(Date.now()),
      quant: quant,
      desconto: 0,
      total: amount
    }
    try {
      if (quant <= 0) {
        Alert.alert('Favor informar quantos produtos estão sendo vendidos!');
      } else {
        const response = await AsyncStorage.getItem(keyVendas);
        const currentData:IVenda[] = response ? JSON.parse(response) : [];
        const formattedData:IVenda[] = [
          ...currentData,
          newData
        ];
        await AsyncStorage.setItem(keyVendas, JSON.stringify(formattedData))
        Alert.alert('Produto vendido com sucesso!');
        onClose();
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel cadastrar o produto!');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title='VENDER PRODUTO' icon='logout' />
        <GroupHeader onPress={handleBack}>
          <IconBack name='arrow-left' size={25} />
          <TextBack>VOLTAR</TextBack>
        </GroupHeader>
        <KeyboardAvoidingView>
          <Form>
            <ImgProduto source={{ uri: produto.foto }} />
            <GroupTitle>
              <Title>{produto.nome}</Title>
              <Ingredientes>Ingredientes: {produto.ingredientes}</Ingredientes>
              <Preco>Preço: {produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}</Preco>
            </GroupTitle>

            <Field>
              <Label>Quantidade:</Label>
              <GroupPlus>
                <BtnMinus onPress={handleMinus}>
                  <IconMinus name='minus-square' size={35} />
                </BtnMinus>
                <Quantity>{quant}</Quantity>
                <BtnPlus onPress={handlePlus}>
                  <IconPlus name='plus-square' size={35} />
                </BtnPlus>
              </GroupPlus>
            </Field>
          </Form>
        </KeyboardAvoidingView>
        <Footer>
          <SubTotal>
            Sub-Total: {amount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </SubTotal>
          <Button title='Confirmar Venda' onPress={handleSubmitSell} />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}