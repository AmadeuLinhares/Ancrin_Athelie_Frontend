import React, { useState } from 'react';

import { FaShoppingCart, FaEllipsisV, FaUser } from 'react-icons/fa';
import {
  CabecalhoContainer,
  CabecalhoSubcontainer,
  CabecalhoPrincipal,
  Informacoes,
  IconMenuMobile,
  AncrinAthelie,
  CarrinhoIcon,
  OpcoesMobile,
  OpcoesDesktop,
  AreaUsuario,
} from './styles';

interface Props {
  expande: boolean;
}

export const CabecalhoMobile: React.FC = () => {
  const [clicado, setClick] = useState(false);

  return (
    <CabecalhoContainer>
      <CabecalhoSubcontainer>
        <CabecalhoPrincipal>
          <Informacoes>
            <IconMenuMobile
              rotacionaMenu={clicado}
              onClick={() => {
                setClick(!clicado);
              }}
            >
              <FaEllipsisV color="#795376" size={24} />
            </IconMenuMobile>
            <AncrinAthelie>
              <h1>Ancrin Athelie</h1>
            </AncrinAthelie>
            <AreaUsuario>
              <FaUser color="#795376" size={24} />
            </AreaUsuario>
            <CarrinhoIcon>
              <FaShoppingCart color="#795376" size={24} />
            </CarrinhoIcon>
          </Informacoes>
        </CabecalhoPrincipal>
      </CabecalhoSubcontainer>
      <OpcoesMobile expandeElemento={clicado}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Produtos</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contatos</a>
          </li>
        </ul>
      </OpcoesMobile>
    </CabecalhoContainer>
  );
};

export const CabecalhoDesktop: React.FC = () => {
  return (
    <CabecalhoContainer>
      <CabecalhoSubcontainer>
        <CabecalhoPrincipal>
          <Informacoes>
            <AncrinAthelie>
              <h1>ANCRIN ATHELIE</h1>
            </AncrinAthelie>

            <OpcoesDesktop>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Produtos</a>
                </li>
                <li>
                  <a href="/">Sobre</a>
                </li>
                <li>
                  <a href="/">Contatos</a>
                </li>
              </ul>
            </OpcoesDesktop>

            <AreaUsuario>
              <FaUser color="#795376" size={24} />
            </AreaUsuario>

            <CarrinhoIcon>
              <FaShoppingCart color="#795376" size={24} />
            </CarrinhoIcon>
          </Informacoes>
        </CabecalhoPrincipal>
      </CabecalhoSubcontainer>
    </CabecalhoContainer>
  );
};
