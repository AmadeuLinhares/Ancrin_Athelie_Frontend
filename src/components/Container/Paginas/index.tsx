import React from 'react';

import { Container, Subcontainer, Principal, Faixa } from './styles';

interface Parametros {
  cor: string;
  altura: string;
  titulo: string;
}
const EstruturaContainerPaginas: React.FC<Parametros> = ({
  children,
  titulo,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Faixa>
        <h1>{titulo}</h1>
      </Faixa>
      <Subcontainer>
        <Principal>{children}</Principal>
      </Subcontainer>
    </Container>
  );
};

export default EstruturaContainerPaginas;
