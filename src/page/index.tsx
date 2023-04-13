import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { Card, Grid, Stack, Typography } from "@mui/material";
import { useGetProductsQuery } from "../core/redux/product.api";
import ProductCard from "../components/Cards/ProductCard/ProductCard";

const HomePage = () => {
  const { data, isLoading, error } = useGetProductsQuery(5);

  return (
    <Layout>
      {isLoading ? (
        "Loading"
      ) : (
        <Stack direction={"column"} gap={3}>
          <Typography fontSize={"28px"} fontWeight={600}>
            All Products
          </Typography>
          <Grid container spacing={3} mb={4}>
            {data?.map((p) => (
              <Grid key={p.id} item xs={12} sm={12} md={4}>
                <ProductCard {...p} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </Layout>
  );
};

export default HomePage;
