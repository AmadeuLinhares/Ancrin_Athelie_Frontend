import React from 'react';

import { Autenticacao } from './Autenticacao';
import { ToastComponent } from './Toast';

const ToastGroup: React.FC = ({ children }) => {
  return (
    <ToastComponent>
      <Autenticacao>{children}</Autenticacao>
    </ToastComponent>
  );
};

export default ToastGroup;
