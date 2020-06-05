import React from 'react';
import {
  CardContainer,
  CardSubcontainer,
  CardImgs,
  ImgFundo,
  ImgPrincipal,
  Titulo,
  Descricao,
  BtnExplorar,
  InfoProduto,
} from './styles';
import produtoImg from '../../../assets/Produto_1.png';

interface Parameters {
  posicao: boolean;
}
const CardProdutosPrincipais: React.FC<Parameters> = ({ posicao }) => {
  return (
    <CardContainer>
      <CardSubcontainer direita={posicao}>
        <CardImgs direita={posicao}>
          <ImgFundo direita={posicao} />
          <ImgPrincipal direita={posicao} src={produtoImg} alt="Produtos" />
        </CardImgs>
        <InfoProduto direita={posicao}>
          <Titulo>A partir de R$ 20,00</Titulo>
          <Descricao>
            Printed memory foam brief modern throw pillow case
          </Descricao>
          <BtnExplorar>EXPLORAR</BtnExplorar>
        </InfoProduto>
      </CardSubcontainer>
    </CardContainer>
  );
};

export default CardProdutosPrincipais;
