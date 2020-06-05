import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import {
  ImgPrincipal,
  Apas,
  Depoimento,
  ImageUsuario,
  Citacao,
  UsuarioCitacao,
} from './styles';

import foto from '../../../assets/Produto_1.png';

const Depoimentos: React.FC = () => {
  return (
    <Depoimento>
      <ImageUsuario>
        <ImgPrincipal src={foto} alt="Usuario" />
        <Apas>
          <FaQuoteRight color="white" size={24} />
        </Apas>
      </ImageUsuario>
      <Citacao>
        <p>
          lores input doloris souheblores input doloris souheblores input
          doloris souheblores input doloris souheblores input doloris
          souheblores input doloris souheb
        </p>
      </Citacao>
      <UsuarioCitacao>
        <p>- Autor frase</p>
      </UsuarioCitacao>
    </Depoimento>
  );
};

export default Depoimentos;
