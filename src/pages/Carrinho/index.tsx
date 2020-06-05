import React from 'react';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import TituloPagina from '../../components/Container/Paginas';
import Social from '../../components/Sessoes/Social';
import Container from '../../components/Container/Principal';
import Iteem from '../../components/Cards/ItensCarrinho';
import Bnt from '../../components/Buttons/BtnHoverBranco';
import { CarrinhoContainer, Botoes } from './styles';

const Carrinho: React.FC = () => {
  return (
    <>
      {window.innerWidth < 1200 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <TituloPagina altura="" cor="" titulo="Carrinho" />
      <Container altura="" cor="">
        <CarrinhoContainer>
          <Iteem />
          <Iteem />
          <Iteem />
          <Iteem />
        </CarrinhoContainer>
        <Botoes>
          <Bnt>Adicionar mais produtos</Bnt>
          <Bnt>Finalizar compra</Bnt>
        </Botoes>
      </Container>
      <Social />
    </>
  );
};

export default Carrinho;
