import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

import * as S from "./styles";
import { useParams, useHistory } from "react-router-dom";
import api from "../../../services/api";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validation from "./validation";

function CreateAndEdit() {
  const { id } = useParams();
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      imageUri:
        "https://images.unsplash.com/photo-1632278819106-653306754f63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",

      price: "",
    },
    resolver: yupResolver(validation),
  });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const { data } = await api.get(`/Product/${id}`);

      if (data) reset(data);

      setLoading(false);
    };

    if (id) loadProducts();
  }, [id, reset]);

  const submit = async ({ name, price, imageUri }) => {
    try {
      setLoading(true);
      const { data } = await api.post("/Product", {
        name,
        price: Number(price),
        imageUri,
        id: id ?? "",
      });
      push(`/products/edit/${data.id}`);
      setLoading(false);
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 15 ~ submit ~ error", error);
    }
  };

  return (
    <S.CreateContainer onSubmit={handleSubmit(submit)}>
      <S.Section>
        <S.Title>{id ? "Alterar" : "Criar"} produto</S.Title>
      </S.Section>
      {loading ? (
        "Carregando..."
      ) : (
        <S.Section>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome"
                id="outlined-size-small"
                color="primary"
                size="small"
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
            )}
          />

          <Controller
            name="imageUri"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Link da imagem"
                id="outlined-size-small"
                color="primary"
                size="small"
                error={!!errors?.imageUri}
                helperText={errors?.imageUri?.message}
              />
            )}
          />

          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Preço"
                id="outlined-size-small"
                color="primary"
                type="number"
                size="small"
                error={!!errors?.price}
                helperText={errors?.price?.message}
              />
            )}
          />
        </S.Section>
      )}
      <S.Section>
        <S.CustomButton variant="contained" type="submit" disabled={loading}>
          Enviar
        </S.CustomButton>
      </S.Section>
    </S.CreateContainer>
  );
}

export default CreateAndEdit;
