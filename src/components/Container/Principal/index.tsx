import React from 'react';

import { Container, Subcontainer, Principal } from './styles';

interface Parametros {
  cor: string;
  altura: string;
}
const EstruturaContainer: React.FC<Parametros> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Subcontainer>
        <Principal>{children}</Principal>
      </Subcontainer>
    </Container>
  );
};

export default EstruturaContainer;
