import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';
import { StateToast } from '../../hooks/Toast';

interface InformacoesProps {
  informacoesToast: StateToast[];
}

const ToastContainer: React.FC<InformacoesProps> = ({ informacoesToast }) => {
  console.log('aqui mensagens toats -> -> -> ', informacoesToast);
  return (
    <Container>
      {informacoesToast.map((info) => (
        <Toast key={info.id} type={info.type} descricao={!!info.message}>
          <FiAlertCircle size={20} />
          <div>
            <strong>{info.title}</strong>
            {info.message && <p> {info.message} </p>}
          </div>
          <button type="button">
            <FiXCircle size={20} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
