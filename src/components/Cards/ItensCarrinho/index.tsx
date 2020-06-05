import React from 'react';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import {
  Itens,
  Informacoes,
  PrecoUnidade,
  Quantidade,
  PrecoTotal,
  Title,
  Preco,
  AdicionarQuantidade,
  AddSub,
  ContainerItens,
  InfoDescritivas,
  RemoveItem,
} from './styles';

import Foto from '../../../assets/Principal_Home.png';

const ItensCarrinho: React.FC = () => {
  return (
    <ContainerItens>
      <RemoveItem>
        <MdDelete size={20} color="#B08EAD" />
      </RemoveItem>
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
            <AddSub>
              <button type="button">
                <MdAdd size={18} color="#2a2a2a" />
              </button>
              <button type="button">
                <MdRemove size={18} color="#2a2a2a" />
              </button>
            </AddSub>
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

export default ItensCarrinho;
