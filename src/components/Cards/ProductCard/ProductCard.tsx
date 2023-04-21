import { Avatar, Box, Button, Card, Divider, Rating, Stack, Typography } from "@mui/material";
import { IProducts } from "../../../core/types/product";
import "../../../scss/product.scss";
import { useActions } from "../../../hooks/useActions";
import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

type Props = IProducts;

type PropsProduct = {
  product: IProducts;
};

const ProductCard: FC<{ product: IProducts }> = ({ product }) => {
  const { addItem } = useActions();

  const { cart } = useTypedSelector((state) => state);

  const isExistsInCart = cart.some((p) => p.id === product.id);

  return (
    <Card sx={{ boxShadow: 5, height: "auto", borderRadius: 3 }}>
      <img
        src={product.image}
        style={{
          width: "100%",
          borderRadius: 0,
          height: "300px",
          objectFit: "contain",
          borderBottom: "4px solid #182444",
        }}
      />
      <Stack direction={"column"} spacing={1} p={1.5} pb={2.4}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Stack bgcolor={"#182444"} p={1} pl={2} pr={2} borderRadius={1.2}>
            <Typography fontWeight={500} color={"#fff"}>
              {`${product.price} $`}
            </Typography>
          </Stack>
          <Rating name="no-value" value={product.rating.rete} />
        </Box>
        <Typography fontWeight={600} fontSize={"18px"}>
          {product.title}
        </Typography>
        <Typography fontWeight={500} color={"#858282"}>
          {product.description.slice(0, 100)}....
        </Typography>
        <Box display={"flex"} justifyContent={"flex-start"} pb={1.9}>
          <Stack bgcolor={"#182444"} p={1} pl={2} pr={2} borderRadius={1.2}>
            <Typography fontWeight={500} color={"#fff"}>
              {product.category.toUpperCase()}
            </Typography>
          </Stack>
        </Box>
        <Button
          variant={isExistsInCart ? "contained" : "outlined"}
          sx={{
            border: "1px solid #182444",
            color: isExistsInCart ? "#fff" : "#182444",
            bgcolor: isExistsInCart ? "#182444" : "none",
            ":hover": {
              bgcolor: isExistsInCart ? "#182444" : "none",
              border: "1px solid #182444",
            },
          }}
          className="btn-product"
          onClick={() => !isExistsInCart && addItem(product)}
        >
          {isExistsInCart ? "Added to cart" : " Add to Product"}
        </Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
