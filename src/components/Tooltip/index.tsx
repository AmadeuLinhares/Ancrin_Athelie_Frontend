import React from 'react';
import { Container } from './styles';

interface TooltipParameters {
  titulo: string;
  className?: string;
}

const Tooltip: React.FC<TooltipParameters> = ({
  titulo,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{titulo}</span>
    </Container>
  );
};

export default Tooltip;
