import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';
import { IProduto } from '../../../utils/interface';
import uuid from 'uuid';

import {
  Container,
  Form,
  Field,
  GroupTitle,
  Title,
  Preco,
  Ingredientes,
  Label,
  ImgProduto,
  Footer,
  SubTotal
} from './styles';

interface Props {
  produto: IProduto;
  onClose: () => void;
}

export function Vendas({ produto, onClose }: Props) {
  const [quant, setQuant] = useState(0);
  const amount = quant ? produto.preco * quant : 0;

  function handleSubmitSell() {
    const data = {
      id: String(uuid.v4()),
      product: {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        ingredientes: produto.ingredientes,
        foto: produto.foto
      },
      datavenda: '28/07/2022',
      quant: quant,
      desconto: 0,
      total: amount
    }
//    console.log(data)
    onClose();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title='VENDER PRODUTO' icon='logout' />
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
              <Input
                placeholder='Quant'
                keyboardType='numeric'
                onChangeText={(value) => setQuant(Number(value))}
              />
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