import React from 'react';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import CardPrincipal from '../../components/Cards/ProdutosPrincipais';
import Categorias from '../../components/Sessoes/Categorias';
import Social from '../../components/Sessoes/Social';
import Depoimentos from '../../components/Sessoes/Depoimentos';
import Container from '../../components/Container/Principal';
import { CardsProdutosPrincipais } from './styles';
import ImgHome from '../../components/Container/Home';

const Home: React.FC = () => {
  return (
    <>
      {window.innerWidth < 1024 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <ImgHome />
      <Container cor="" altura="">
        <CardsProdutosPrincipais>
          <CardPrincipal posicao />
          <CardPrincipal posicao={false} />
          <CardPrincipal posicao />
          <CardPrincipal posicao={false} />
        </CardsProdutosPrincipais>
      </Container>
      <Categorias />
      <Depoimentos />
      <Social />
    </>
  );
};

export default Home;
