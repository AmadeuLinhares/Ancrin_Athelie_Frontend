import React from 'react';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import TituloPagina from '../../components/Container/Paginas';
import Container from '../../components/Container/Principal';
import Social from '../../components/Sessoes/Social';
import ItensPedido from '../../components/Cards/ItensPedidos';
import {
  AreaUsuarioContainer,
  InfoUsuario,
  Pedidos,
  Endereco,
  AreaEscolhida,
  TituloAba,
  MeusDados,
  TituloMeusDados,
  TextoMeusDados,
  ContainerButton,
  Button,
  ContainerMeusDados,
  Avatar,
} from './styles';

import foto from '../../assets/Principal_Home.png';

const AreaDoUsuario: React.FC = () => {
  // const usuarioLogado = useContext(Autenticacao);
  return (
    <>
      {window.innerWidth < 1200 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <TituloPagina altura="" cor="" titulo="Nome Usuario" />
      <Container cor="" altura="">
        <AreaUsuarioContainer>
          <AreaEscolhida>
            <TituloAba>
              <h1>Meus Dados</h1>
            </TituloAba>
            <InfoUsuario>
              <ContainerMeusDados>
                <MeusDados>
                  <TituloMeusDados>
                    <p>Nome</p>
                  </TituloMeusDados>
                  <TextoMeusDados>
                    <p>Amadeu Linhares Pontes Neto</p>
                  </TextoMeusDados>
                </MeusDados>
                <MeusDados>
                  <TituloMeusDados>
                    <p>E-mail:</p>
                  </TituloMeusDados>
                  <TextoMeusDados>
                    <p>amadeulinharesp@gmail.com</p>
                  </TextoMeusDados>
                </MeusDados>
                <MeusDados>
                  <TituloMeusDados>
                    <p>CPF:</p>
                  </TituloMeusDados>
                  <TextoMeusDados>
                    <p>034.321.741-44</p>
                  </TextoMeusDados>
                </MeusDados>
                <MeusDados>
                  <TituloMeusDados>
                    <p>Senha:</p>
                  </TituloMeusDados>
                  <TextoMeusDados>
                    <p>********</p>
                  </TextoMeusDados>
                </MeusDados>
              </ContainerMeusDados>

              <Avatar fotoUsuario={foto}>
                <span>Editar</span>
              </Avatar>

              <ContainerButton>
                <Button>Editar Dados</Button>
              </ContainerButton>
            </InfoUsuario>
          </AreaEscolhida>
          <AreaEscolhida>
            <TituloAba>
              <h1>Meus Pedidos</h1>
            </TituloAba>
            <Pedidos>
              <ItensPedido />
              <ItensPedido />
              <ItensPedido />
              <ItensPedido />
            </Pedidos>
          </AreaEscolhida>
          <AreaEscolhida>
            <TituloAba>
              <h1>Meus Endereços</h1>
            </TituloAba>
            <Endereco>
              <MeusDados>
                <TituloMeusDados>
                  <p>Quadra:</p>
                </TituloMeusDados>
                <TextoMeusDados>
                  <p>EQRRSW 2/3 AE 02</p>
                </TextoMeusDados>
              </MeusDados>
              <MeusDados>
                <TituloMeusDados>
                  <p>CEP: </p>
                </TituloMeusDados>
                <TextoMeusDados>
                  <p>70.675-260</p>
                </TextoMeusDados>
              </MeusDados>
              <MeusDados>
                <TituloMeusDados>
                  <p>Numero:</p>
                </TituloMeusDados>
                <TextoMeusDados>
                  <p>07</p>
                </TextoMeusDados>
              </MeusDados>
              <MeusDados>
                <TituloMeusDados>
                  <p>Complemento:</p>
                </TituloMeusDados>
                <TextoMeusDados>
                  <p>Atrás do batalhão de polícia, portaria vermelha e azul</p>
                </TextoMeusDados>
              </MeusDados>
              <ContainerButton>
                <Button>Editar endereco</Button>
              </ContainerButton>
            </Endereco>
          </AreaEscolhida>
        </AreaUsuarioContainer>
      </Container>
      <Social />
    </>
  );
};

export default AreaDoUsuario;
