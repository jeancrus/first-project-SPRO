import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import * as S from "./styles";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

function CreateAndEdit() {
  const { id } = useParams();
  const [formState, setFormState] = useState({
    name: "",
    imageUri:
      "https://images.unsplash.com/photo-1632278819106-653306754f63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",

    price: 0,
  });

  const submit = async ({ name, imageUri, price }) => {
    try {
      const resp = await api.post("/Product", {
        name,
        price: Number(price),
        imageUri,
      });
      console.log("🚀 ~ file: index.js ~ line 19 ~ submit ~ resp", resp);
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 15 ~ submit ~ error", error);
    }
  };

  const handleText = (e, name) => {
    setFormState((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  return (
    <S.CreateContainer>
      <S.Section>
        <S.Title>{id ? "Alterar" : "Criar"} produto</S.Title>
      </S.Section>
      <S.Section>
        <TextField
          label="Nome"
          id="outlined-size-small"
          color="primary"
          value={formState.name}
          onChange={(e) => handleText(e, "name")}
          size="small"
        />
        <TextField
          label="Link da imagem"
          id="outlined-size-small"
          color="primary"
          value={formState.imageUri}
          onChange={(e) => handleText(e, "imageUri")}
          size="small"
        />
        <TextField
          label="Preço"
          id="outlined-size-small"
          color="primary"
          type="number"
          value={formState.price}
          onChange={(e) => handleText(e, "price")}
          size="small"
        />
      </S.Section>
      <S.Section>
        <S.CustomButton variant="contained" onClick={() => submit(formState)}>
          Enviar
        </S.CustomButton>
      </S.Section>
    </S.CreateContainer>
  );
}

export default CreateAndEdit;
