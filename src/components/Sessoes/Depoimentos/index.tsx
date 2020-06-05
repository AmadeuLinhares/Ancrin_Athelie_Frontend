import React from 'react';

import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import Container from '../../Container/Principal';
import { SessaoDepoimentos } from './styles';
import Card from '../../Cards/Depoimentos';

const params = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
};

const altura = window.innerWidth < 1200 ? 'auto' : 'auto';
const DepoimentosSessao: React.FC = () => {
  return (
    <Container cor="#B08EAD" altura={altura}>
      <SessaoDepoimentos>
        <Swiper {...params}>
          <div className="swiper-slider">
            <Card />
          </div>
          <div className="swiper-slider">
            <Card />
          </div>
          <div className="swiper-slider">
            <Card />
          </div>
          <div className="swiper-slider">
            <Card />
          </div>
          <div className="swiper-slider">
            <Card />
          </div>
        </Swiper>
      </SessaoDepoimentos>
    </Container>
  );
};
export default DepoimentosSessao;
