import React from 'react';
import { BtnExplorar } from './styles';

interface ButtonParameters {
  className?: string;
}

const ButtonHoverBranco: React.FC<ButtonParameters> = ({
  children,
  className = '',
}) => {
  return <BtnExplorar className={className}>{children}</BtnExplorar>;
};

export default ButtonHoverBranco;
