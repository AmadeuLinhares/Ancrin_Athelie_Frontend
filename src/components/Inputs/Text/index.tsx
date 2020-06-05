import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Input, ContainerInput, ErrroContainer } from './styles';
// useField é um Hook que recebe como parametro o nome do campo

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  colorIcon?: string;
  sizeIcon?: number;
  name: string;
}

const InputTypeText: React.FC<InputProps> = ({
  icon: Icon,
  colorIcon,
  sizeIcon,
  name,
  ...rest
}) => {
  const {
    // clearError,
    // defaultValue,
    error,
    fieldName,
    registerField,
  } = useField(name);

  const InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName, // pegpu o nome de cada input
      ref: InputRef.current, // pegou a referencia de cada input
      path: 'value', // pegou o valor de cada input
    });
  }, [fieldName, registerField]);

  const [isFocused, setIsFocused] = useState(false);
  const [estaPreenchido, setEstaPreenchido] = useState(false);

  const touched = useCallback(() => {
    setIsFocused(false);
    setEstaPreenchido(!!InputRef.current?.value);
  }, []);

  return (
    <ContainerInput
      isError={!!error}
      isFocused={isFocused}
      estaPreenchido={estaPreenchido}
    >
      {Icon && <Icon size={sizeIcon} color={colorIcon} />}
      <Input
        ref={InputRef}
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={touched}
      />
      {error && (
        <ErrroContainer titulo={error}>
          <FiAlertCircle size={20} color="#c53030" />
        </ErrroContainer>
      )}
    </ContainerInput>
  );
};
export default InputTypeText;
