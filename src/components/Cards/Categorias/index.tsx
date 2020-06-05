import React from 'react';

import {
  CardCategoriaContainer,
  CardCategoriaSubcontainer,
  Image,
  Descricao,
} from './styles';

import produtoImg from '../../../assets/Produto_1.png';

const CategoriasCard: React.FC = ({ children }) => {
  return (
    <CardCategoriaContainer>
      <CardCategoriaSubcontainer>
        <Image src={produtoImg} alt="Categoria" />
        <Descricao>{children}</Descricao>
      </CardCategoriaSubcontainer>
    </CardCategoriaContainer>
  );
};

export default CategoriasCard;
