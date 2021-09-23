import * as React from "react";

import { useHistory } from "react-router-dom";

import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";

import * as S from "./styles";

export default function ProductCard({
  imageUri,
  name,
  price,
  id,
  handleRemove,
}) {
  const { push } = useHistory();

  return (
    <S.CardContainer>
      <CardMedia component="img" alt={name} height="140" image={imageUri} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nome: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => push(`/products/edit/${id}`)}
        >
          <Edit />
          Editar
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => handleRemove(id)}
        >
          <Delete /> Excluir
        </Button>
      </CardActions>
    </S.CardContainer>
  );
}
