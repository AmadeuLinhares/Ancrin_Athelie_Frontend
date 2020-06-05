import React, { useState } from 'react';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import TituloPagina from '../../components/Container/Paginas';
import Social from '../../components/Sessoes/Social';
import Depoimentos from '../../components/Sessoes/Depoimentos';
import Container from '../../components/Container/Principal';
import {
  ProdutosContainer,
  Filtros,
  Lista,
  BtnMaisProdutos,
  ItemFiltro,
  Icon,
  ContainerFiltros,
  ListaFiltros,
  CardProdutos,
} from './styles';
import Foto from '../../assets/Principal_Home.png';

const Produtos: React.FC = () => {
  const [exibirFiltro, setFiltro] = useState(false);

  return (
    <>
      {window.innerWidth < 1200 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <TituloPagina altura="" cor="" titulo="Produtos" />
      <Container altura="" cor="">
        <ProdutosContainer>
          {/* FILTROS */}
          <ContainerFiltros>
            <Filtros>
              <ItemFiltro
                expandirFiltro={exibirFiltro}
                onClick={() => setFiltro(!exibirFiltro)}
              >
                <p>Categorias</p>
                <Icon color="#795376" size={20} />
              </ItemFiltro>
              <ListaFiltros expandirFiltro={exibirFiltro}>
                <ul>
                  <li>
                    <a href="/">Item</a>
                  </li>
                  <li>
                    <a href="/">Item</a>
                  </li>
                  <li>
                    <a href="/">Item</a>
                  </li>
                  <li>
                    <a href="/">Item</a>
                  </li>
                </ul>
              </ListaFiltros>
            </Filtros>
            <Filtros>
              <ItemFiltro
                expandirFiltro={exibirFiltro}
                onClick={() => setFiltro(!exibirFiltro)}
              >
                <p>Categorias</p>
                <Icon color="#795376" size={20} />
              </ItemFiltro>
              <ListaFiltros expandirFiltro={exibirFiltro}>
                <ul>
                  <li>
                    <a href="/">Item</a>
                  </li>
                  <li>
                    <a href="/">Item</a>
                  </li>
                  <li>
                    <a href="/">Item</a>
                  </li>
                  <li>
                    <a href="/">Item</a>
                  </li>
                </ul>
              </ListaFiltros>
            </Filtros>
          </ContainerFiltros>
          {/* FILTROS */}
          <Lista>
            <CardProdutos>
              <img src={Foto} alt="foto" />
              <h1>
                lores input doloris souheblores input doloris souheblores input
                doloris
              </h1>
              <p>A partir de R$ 20,00</p>
            </CardProdutos>

            <CardProdutos>
              <img src={Foto} alt="foto" />
              <h1>
                lores input doloris souheblores input doloris souheblores input
                doloris
              </h1>
              <p>A partir de R$ 20,00</p>
            </CardProdutos>

            <CardProdutos>
              <img src={Foto} alt="foto" />
              <h1>
                lores input doloris souheblores input doloris souheblores input
                doloris
              </h1>
              <p>A partir de R$ 20,00</p>
            </CardProdutos>

            <CardProdutos>
              <img src={Foto} alt="foto" />
              <h1>
                lores input doloris souheblores input doloris souheblores input
                doloris
              </h1>
              <p>A partir de R$ 20,00</p>
            </CardProdutos>
          </Lista>
          <BtnMaisProdutos />
        </ProdutosContainer>
      </Container>
      <Depoimentos />
      <Social />
    </>
  );
};

export default Produtos;
