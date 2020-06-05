import styled from 'styled-components';

export const SessaoDepoimentos = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  .swiper-container {
    width: 300px;
    height: auto;
    display: grid;
    grid-row-gap: 40px;
    grid-template-rows: auto auto;
  }

  .swiper-container .swiper-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: none;
  }

  .swiper-container .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet-active {
    background: white !important;
  }

  @media only screen and (min-width: 1024px) {
    .swiper-container {
      margin: 40px 0;
      width: 920px;
      height: auto;
      display: grid;
      grid-row-gap: 80px;
      grid-template-rows: auto auto;
    }

    .swiper-container .swiper-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: none;
    }

    .swiper-container .swiper-wrapper .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (min-width: 1440px) {
    .swiper-container {
      width: 1200px;
      height: auto;
      display: grid;
      grid-row-gap: 80px;
      grid-template-rows: auto auto;
    }

    .swiper-container .swiper-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: none;
    }

    .swiper-container .swiper-wrapper .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
