import React, { useState } from 'react';
import { IProduto } from '../../utils/interface';

import {
    Container,
    GroupProduct,
    ProductPhoto,
    SubGroupProduct,
    ProductName,
    ProductPrice,
    GroupSell,
    BtnPlus,
    IconPlus,
    Amount,
    BtnMinus,
    IconMinus,
} from './styles';

interface Props {
    produto: IProduto;
    vendidos: number;
    setVendidos: (vendidos: number) => void;
}

export function CardSell({ produto, vendidos, setVendidos }: Props) {
    const precoUnitario = produto.preco;
    const [qtdVendas, setQtdVendas] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    function handlePlus() {
        setQtdVendas(qtdVendas + 1);
        setSubTotal(precoUnitario * qtdVendas)
        console.log(qtdVendas)
    }

    function handleMinus() {
        setQtdVendas(qtdVendas - 1);
        setSubTotal(precoUnitario * qtdVendas)
    }

    return (
        <Container>
            <GroupProduct>
                <ProductPhoto
                    source={{ uri: produto.foto }}
                    style={{ borderRadius: 50 }}
                />
                <SubGroupProduct>
                    <ProductName>{produto.nome}</ProductName>
                    <ProductPrice>
                        Preço Unitário: {precoUnitario.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </ProductPrice>
                    <ProductPrice>
                        Sub-Total: {subTotal.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}

                    </ProductPrice>
                </SubGroupProduct>
            </GroupProduct>

            <GroupSell>
                <BtnPlus onPress={handlePlus}>
                    <IconPlus name='plus' size={20} />
                </BtnPlus>
                <Amount>{qtdVendas}</Amount>
                <BtnMinus onPress={handleMinus}>
                    <IconMinus name='minus' size={20} />
                </BtnMinus>
            </GroupSell>
        </Container>
    )
}