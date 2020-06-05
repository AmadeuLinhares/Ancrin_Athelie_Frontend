import React, { ButtonHTMLAttributes } from 'react';
import { BtnExplorar } from './styles';

interface ButtonParameters extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  heigth?: string;
  className?: string;
}

const ButtonHover: React.FC<ButtonParameters> = ({
  children,
  heigth,
  width,
  className,
  ...rest
}) => {
  return (
    <BtnExplorar
      className={className}
      altura={heigth}
      largura={width}
      {...rest}
    >
      {children}
    </BtnExplorar>
  );
};

export default ButtonHover;
