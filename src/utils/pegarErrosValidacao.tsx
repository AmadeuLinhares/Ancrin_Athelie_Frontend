import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function pegarErrosValidacao(err: ValidationError): Errors {
  const validacaoError: Errors = {};

  err.inner.forEach((error) => {
    validacaoError[error.path] = error.message;
  });

  return validacaoError;
}
