import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../../services/api';

interface Credenciais {
  usuario: string;
  senha: string;
}
interface AutenticacaoInterface {
  usuario: object;
  login(credenciaisUsuario: Credenciais): Promise<void>;
  logout(): void;
}

interface UsuarioLogado {
  token: string;
  usuario: object;
}

const AutenticacaoComponent = createContext<AutenticacaoInterface>(
  {} as AutenticacaoInterface,
);

const Autenticacao: React.FC = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioLogado>(() => {
    const token = sessionStorage.getItem('@Token_Ancrin_Athelie');
    const user = sessionStorage.getItem('@Usuario_Ancrin_Athelie');

    if (token && user) {
      return { token, usuario: JSON.parse(user) };
    }
    return {} as UsuarioLogado;
  });

  const login = useCallback(async ({ usuario, senha }) => {
    const bodyFormData = new FormData();
    bodyFormData.set('login', usuario);
    bodyFormData.set('senha', senha);

    try {
      const response = await api.post('Sessao', bodyFormData);
      console.log('resposta aqui -> ', response.data);
      const { token, user } = response.data;
      sessionStorage.setItem('@Token_Ancrin_Athelie', token);
      sessionStorage.setItem('@Usuario_Ancrin_Athelie', JSON.stringify(user));
      setUsuarioLogado({ token, usuario: user });
    } catch (err) {
      throw new Error('Email ou senha invalidos');
    }

    // api({
    //   method: 'post',
    //   url: 'Sessao',
    //   data: bodyFormData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // })
    //   .then(function (response) {
    //     console.log('resposta aqui -> ', response.data);
    //     const { token, user } = response.data;
    //     sessionStorage.setItem('@Token_Ancrin_Athelie', token);
    //     sessionStorage.setItem('@Usuario_Ancrin_Athelie', JSON.stringify(user));
    //     setUsuarioLogado({ token, usuario: user });
    //   })
    //   .catch(function (error) {
    //     throw new Error('Erro ao realizar Login');
    //   });
  }, []);

  const logout = useCallback(() => {
    sessionStorage.clear();
    setUsuarioLogado({} as UsuarioLogado);
  }, []);

  return (
    <AutenticacaoComponent.Provider
      value={{ usuario: usuarioLogado, login, logout }}
    >
      {children}
    </AutenticacaoComponent.Provider>
  );
};

// Logo abaixo é a  Criacao do HOOK que retonar o contexto para podermos usar em outros lugares

function useAutenticacao(): AutenticacaoInterface {
  const context = useContext(AutenticacaoComponent);

  if (!context) {
    throw new Error(
      'Contexto de autenticacao deve ser utilizado com o Autenticacao por volta',
    );
  } else {
    return context;
  }
}

export { Autenticacao, useAutenticacao };
