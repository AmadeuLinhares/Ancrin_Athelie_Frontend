import React, { useState, InputHTMLAttributes } from 'react';

// import { AiOutlineBorder, AiOutlineCheckSquare } from 'react-icons/ai';
import { ContainerCheck, Check, Label } from './styles';

type PropsChebox = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<PropsChebox> = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ContainerCheck>
      <Check
        onChange={() => setIsChecked(!isChecked)}
        type="checkbox"
        checked={isChecked}
      />
      <Label>
        <p>{children}</p>
      </Label>
    </ContainerCheck>
  );
};

export default Checkbox;
