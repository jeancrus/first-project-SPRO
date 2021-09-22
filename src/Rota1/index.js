import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function Rota1({ numbers }) {
  const { banana } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestApi = async () => {
      setLoading(true);

      // const resp = await api.get("/Product");

      setLoading(false);
    };

    requestApi();
  }, [banana]);

  return <div>rota {numbers}</div>;
}

export default Rota1;
