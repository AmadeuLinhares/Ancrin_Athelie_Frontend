import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import SobreProduto from '../pages/SobreProduto';
import Carrinho from '../pages/Carrinho';
import CriarConta from '../pages/CriarConta';
import Login from '../pages/Login';
import AreaDoUsuario from '../pages/AreaUsuario';
import Teste from '../pages/Teste';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Produtos" exact component={Produtos} />
    <Route path="/Produtos/Sobre" exact component={SobreProduto} />
    <Route path="/Carrinho" exact component={Carrinho} />
    <Route path="/CriarUsuario" exact component={CriarConta} />
    <Route path="/Login" exact component={Login} />
    <Route path="/Usuario" exact component={AreaDoUsuario} />
    <Route path="/Teste" exact component={Teste} />
  </Switch>
);

export default Routes;
