import React, { createContext, useCallback, useState, useContext } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../../components/ToastContainer';

export interface StateToast {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface DataToast {
  addToast(message: Omit<StateToast, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<DataToast>({} as DataToast);

const ToastComponent: React.FC = ({ children }) => {
  const [mensagens, setMessage] = useState<StateToast[]>([]);
  const addToast = useCallback(
    ({ type, title, message }: Omit<StateToast, 'id'>) => {
      console.log('usando toast');
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        message,
      };

      // setMessage((state) => [...messages, novoToast]);
      setMessage((state) => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id) => {
    console.log('usando toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer informacoesToast={mensagens} />
    </ToastContext.Provider>
  );
};

function useToast(): DataToast {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      'O context Toast deve ser usado somente dentro da tag Toast component',
    );
  } else {
    return context;
  }
}
export { ToastComponent, useToast };
