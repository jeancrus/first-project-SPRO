import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as S from "./styles";

function Header() {
  const { location } = useHistory();

  return (
    <S.HeaderContainer>
      <S.NavBar>
        <ul>
          <S.HeaderLink isRoute={location.pathname === "/"}>
            <Link to="/">Listagem de produtos</Link>
          </S.HeaderLink>
          <S.HeaderLink isRoute={location.pathname === "/products/create"}>
            <Link to="/products/create">Criar produto</Link>
          </S.HeaderLink>
        </ul>
      </S.NavBar>
    </S.HeaderContainer>
  );
}

export default Header;
