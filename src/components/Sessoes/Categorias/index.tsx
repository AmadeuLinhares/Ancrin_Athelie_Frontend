import React from 'react';
import Container from '../../Container/Principal';
import Card from '../../Cards/Categorias';
import { CategoriasContainer, Title, CardsCategorias } from './styles';

const Categorias: React.FC = () => {
  return (
    <Container cor="#F4EDF2" altura="">
      <CategoriasContainer>
        <Title>
          <h1>Categorias</h1>
        </Title>
        <CardsCategorias>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
          <Card>
            Texto teste toeefoiefjeoi feoefjioefij eoefij feoijef feoijofiej ef
          </Card>
        </CardsCategorias>
      </CategoriasContainer>
    </Container>
  );
};

export default Categorias;
