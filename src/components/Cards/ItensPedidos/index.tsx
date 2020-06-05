import React from 'react';
import {
  Itens,
  Informacoes,
  PrecoUnidade,
  Quantidade,
  PrecoTotal,
  Title,
  Preco,
  AdicionarQuantidade,
  ContainerItens,
  InfoDescritivas,
} from './styles';

import Foto from '../../../assets/Principal_Home.png';

const ItensPedidos: React.FC = () => {
  return (
    <ContainerItens>
      <Itens>
        <Informacoes>
          <Title>Produto</Title>
          <InfoDescritivas>
            <img src={Foto} alt="ImagemProduto" />
            <p>Minimalistic shop for multipurpose use</p>
          </InfoDescritivas>
        </Informacoes>
        <PrecoUnidade>
          <div>
            <Title>Preço unitario</Title>
          </div>
          <div>
            <Preco>R$ 360.00</Preco>
          </div>
        </PrecoUnidade>
        <Quantidade>
          <Title>Quantidade</Title>
          <AdicionarQuantidade>
            <input type="text" readOnly value={1} />
          </AdicionarQuantidade>
        </Quantidade>
        <PrecoTotal>
          <div>
            <Title>Valor Total</Title>
          </div>
          <div>
            <Preco>R$ 360.00</Preco>
          </div>
        </PrecoTotal>
      </Itens>
    </ContainerItens>
  );
};

export default ItensPedidos;
