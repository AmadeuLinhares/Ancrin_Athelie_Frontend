import React, { useState } from 'react';

import 'swiper/css/swiper.css';

import Swiper, { SwiperInstance } from 'react-id-swiper';

import { MdAdd, MdChevronRight, MdChevronLeft, MdRemove } from 'react-icons/md';
import Social from '../../components/Sessoes/Social';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import Container from '../../components/Container/Principal';
import TituloPagina from '../../components/Container/Paginas';
import {
  InfoProduto,
  Fotos,
  Titulo,
  Descricao,
  Quantidade,
  AddCarrinho,
  TextQtd,
  Add,
  Sub,
  InputQtd,
  PrecoProduto,
  Proximo,
  Anterior,
  ItemSlider,
} from './styles';
import Button from '../../components/Buttons/BtnHover';
import Foto1 from '../../assets/Principal_Home.png';
import Foto2 from '../../assets/Produto_1.png';
import Foto3 from '../../assets/single_product.png';

const params = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
};

const SobreProduto: React.FC = () => {
  const [swiper, setSwiper]: SwiperInstance = useState();

  const goNext: SwiperInstance | null | undefined = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev: SwiperInstance | null | undefined = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  return (
    <>
      {window.innerWidth < 1024 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <TituloPagina altura="" cor="" titulo="" />
      <Container altura="" cor="">
        <InfoProduto>
          <Fotos>
            <Swiper {...params} getSwiper={setSwiper}>
              <div className="swiper-slider">
                <ItemSlider imageBackground={Foto1}>
                  <Anterior onClick={goPrev}>
                    <MdChevronLeft size={30} color="#fff" />
                  </Anterior>
                  <Proximo onClick={goNext}>
                    <MdChevronRight size={30} color="#fff" />
                  </Proximo>
                </ItemSlider>
              </div>
              <div className="swiper-slider">
                <ItemSlider imageBackground={Foto2}>
                  <Anterior onClick={goPrev}>
                    <MdChevronLeft size={30} color="#fff" />
                  </Anterior>
                  <Proximo onClick={goNext}>
                    <MdChevronRight size={30} color="#fff" />
                  </Proximo>
                </ItemSlider>
              </div>
              <div className="swiper-slider">
                <ItemSlider imageBackground={Foto3}>
                  <Anterior onClick={goPrev}>
                    <MdChevronLeft size={30} color="#fff" />
                  </Anterior>
                  <Proximo onClick={goNext}>
                    <MdChevronRight size={30} color="#fff" />
                  </Proximo>
                </ItemSlider>
              </div>
            </Swiper>
          </Fotos>
          <Titulo>
            <h1>Foam filling cotton slow rebound pillows</h1>
          </Titulo>
          <Descricao>
            <p>
              Seamlessly empower fully researched growth strategies and
              interoperable internal or “organic” sources. Credibly innovate
              granular internal or “organic” sources whereas high standards in
              web-readiness. Credibly innovate granular internal or organic
              sources whereas high standards in web-readiness. Energistically
              scale future-proof core competencies vis-a-vis impactful
              experiences. Dramatically synthesize integrated schemas. with
              optimal networks.
            </p>
          </Descricao>
          <Quantidade>
            <TextQtd>
              <p>Quantidade</p>
            </TextQtd>
            <InputQtd>
              <Sub>
                <MdRemove size={20} color="#795376" />
              </Sub>
              <input type="text" readOnly value={0} />
              <Add>
                <MdAdd color="#795376" size={20} />
              </Add>
            </InputQtd>
            <PrecoProduto>
              <p>R$ 5,00</p>
            </PrecoProduto>
          </Quantidade>
          <AddCarrinho>
            <Button>Add ao Carrinho</Button>
          </AddCarrinho>
        </InfoProduto>
      </Container>
      <Social />
    </>
  );
};

export default SobreProduto;
