import React, { useState } from "react";

import { Container } from "./styles";
import { useParams } from "react-router-dom";

function Rota2({ props }) {
  const { fruta } = useParams();
  console.log("🚀 ~ file: index.js ~ line 8 ~ Rota2 ~ fruta", fruta);
  const [apareceRota2, setApareceRota2] = useState("");

  return (
    <Container fruta={apareceRota2}>
      <input type="text" onChange={(e) => setApareceRota2(e.target.value)} />
      {apareceRota2}
    </Container>
  );
}

export default Rota2;
