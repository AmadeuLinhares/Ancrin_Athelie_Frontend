import React from 'react';

import {
  Container,
  Subcontainer,
  Principal,
  ImagesHome,
  PrincipalHomeImg,
  ImgComplemento,
  InformacoesHome,
  BarraLateral,
} from './styles';
import Foto from '../../../assets/Principal_Home.png';
import Foto2 from '../../../assets/Pontos.png';

const HomeContainer: React.FC = () => {
  return (
    <Container>
      <ImagesHome>
        <PrincipalHomeImg src={Foto} alt="fotoapresentacao" />
        <ImgComplemento src={Foto2} alt="fotoapresentacao" />
      </ImagesHome>
      <BarraLateral />
      <Subcontainer>
        <Principal>
          <InformacoesHome>
            <h1>Ancrin Athelie</h1>
            <p>
              lores input doloris souheblores input doloris souheblores input
              doloris souheblores input doloris souheblores input doloris
              souheblores input doloris souheb
            </p>
            <button type="button">
              <p>Comprar</p>
            </button>
          </InformacoesHome>
        </Principal>
      </Subcontainer>
    </Container>
  );
};

export default HomeContainer;
