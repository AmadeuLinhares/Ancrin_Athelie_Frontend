import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import Container from '../../Container/Principal';
import {
  AncrinAthelie,
  OpcoesMenu,
  RedesSocias,
  InfoMidias,
  Logo,
  Nome,
} from './styles';

import logo from '../../../assets/Produto_1.png';

const valorAltura = window.innerWidth < 1200 ? 'auto' : 'auto';

const sizeIcon = window.innerWidth < 1024 && window.innerWidth < 1440 ? 20 : 25;

const Midias: React.FC = () => {
  return (
    <Container cor="rgba(244,237,242, .4)" altura={valorAltura}>
      <InfoMidias>
        <AncrinAthelie>
          <Logo src={logo} alt="Logo" />
          <Nome>Ancrin Athelie</Nome>
        </AncrinAthelie>
        <OpcoesMenu>
          <a href="/">Home</a>
          <a href="/">Produtos</a>
          <a href="/">Sobre</a>
          <a href="/">Contatos</a>
        </OpcoesMenu>
        <RedesSocias>
          <div>
            <FaFacebookF color="white" size={sizeIcon} />
          </div>
          <div>
            <FaTwitter color="white" size={sizeIcon} />
          </div>
          <div>
            <FaInstagram color="white" size={sizeIcon} />
          </div>
          <div>
            <FaWhatsapp color="white" size={sizeIcon} />
          </div>
        </RedesSocias>
      </InfoMidias>
    </Container>
  );
};

export default Midias;
