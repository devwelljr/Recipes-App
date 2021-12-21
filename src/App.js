import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Perfil from './pages/Perfil';
import ReceitasPrincipal from './pages/ReceitasPrincipal';
import ReceitaDetalhes from './pages/ReceitaDetalhes';
import ReceitaEmProgresso from './pages/ReceitaEmProgresso';
import Explorar from './pages/Explorar';
import ExplorarIngredientes from './pages/ExplorarIngredientes';
import ExplorarArea from './pages/ExplorarArea';
import ReceitasFeitas from './pages/ReceitaFeita';
import ReceitasFavorita from './pages/ReceitaFavorita';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ ReceitasPrincipal } />
        <Route path="/bebidas" component={ ReceitasPrincipal } />
        <Route path="/comidas/{id-da-receita}" component={ ReceitaDetalhes } />
        <Route path="/bebidas/{id-da-receita}" component={ ReceitaDetalhes } />
        <Route
          path="/comidas/{id-da-receita}/in-progress"
          component={ ReceitaEmProgresso }
        />
        <Route
          path="/bebidas/{id-da-receita}/in-progress"
          component={ ReceitaEmProgresso }
        />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/explorar/comidas" component={ Explorar } />
        <Route path="/explorar/bebidas" component={ Explorar } />
        <Route path="/explorar/comidas/ingredientes" component={ ExplorarIngredientes } />
        <Route path="/explorar/bebidas/ingredientes" component={ ExplorarIngredientes } />
        <Route path="/explorar/comidas/area" component={ ExplorarArea } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavorita } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
