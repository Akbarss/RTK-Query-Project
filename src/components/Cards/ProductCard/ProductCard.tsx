import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { IProducts } from "../../../core/types/product";

type Props = IProducts;

const ProductCard = (props: Props) => {
  return (
    <Card sx={{ boxShadow: 5, height: "500px", borderRadius: 3 }}>
      <img
        src={props.image}
        style={{
          width: "100%",
          borderRadius: 0,
          height: "300px",
          objectFit: "contain",
          borderBottom: "4px solid #182444",
        }}
      />
      <Stack direction={"column"} spacing={2} p={1.5}>
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Stack bgcolor={"#182444"} p={1} pl={2} pr={2} borderRadius={1.2}>
            <Typography fontWeight={500} color={"#fff"}>
              {`${props.price} $`}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default ProductCard;
