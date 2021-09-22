import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rota1 from "./Rota1";
import Rota2 from "./Rota2";

function Teste() {
  const [apareceRota2, setApareceRota2] = useState(false);
  const [apareceTexto, setApareceTexto] = useState([0, 1, 2]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Principal</Link>
            </li>
            <li>
              <Link to="/rota1/maca">Maçã</Link>
            </li>
            <li>
              <Link to="/rota1/banana">Banana</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rota1" exact>
            <Rota1 numbers={1} />
          </Route>
          <Route path="/rota1/:fruta">
            <Rota2 numbers={4} />
          </Route>
          {/* <Route path="/rota2">
            <Rota2 numbers={2} />
          </Route> */}
          <Route path="/">
            <div>Pagina principal</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Teste;
