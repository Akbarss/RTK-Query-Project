import { Avatar, Card } from "@mui/material";
import React from "react";
import { IProducts } from "../../../core/types/product";

type Props = IProducts;

const ProductCard = (props: Props) => {
  return (
    <Card sx={{ boxShadow: 3, height: "500px" }}>
      <Avatar src={props.image} sx={{ width: "100%", borderRadius: 0, height: "300px" }} />
    </Card>
  );
};

export default ProductCard;
