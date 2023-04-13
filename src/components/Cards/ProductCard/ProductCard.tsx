import { Avatar, Box, Button, Card, Divider, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { IProducts } from "../../../core/types/product";

type Props = IProducts;

const ProductCard = (props: Props) => {
  return (
    <Card sx={{ boxShadow: 5, height: "auto", borderRadius: 3 }}>
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
      <Stack direction={"column"} spacing={1} p={1.5} pb={2.4}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Stack bgcolor={"#182444"} p={1} pl={2} pr={2} borderRadius={1.2}>
            <Typography fontWeight={500} color={"#fff"}>
              {`${props.price} $`}
            </Typography>
          </Stack>
          <Rating name="no-value" value={props.rating.rete} />
        </Box>
        <Typography fontWeight={600} fontSize={"18px"}>
          {props.title}
        </Typography>
        <Typography fontWeight={500} color={"#858282"}>
          {props.description.slice(0, 100)}....
        </Typography>
        <Box display={"flex"} justifyContent={"flex-start"} pb={1.9}>
          <Stack bgcolor={"#182444"} p={1} pl={2} pr={2} borderRadius={1.2}>
            <Typography fontWeight={500} color={"#fff"}>
              {props.category}
            </Typography>
          </Stack>
        </Box>
        <Button variant="outlined" sx={{ border: "1px solid #182444", color: "#182444" }}>
          Add to Product
        </Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
