import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { Card, Grid, Stack, Typography } from "@mui/material";
import { useGetProductsQuery } from "../core/redux/product.api";

const HomePage = () => {
  const { data, isLoading, error } = useGetProductsQuery(6);

  return (
    <Layout>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          {data?.map((p) => (
            <Card sx={{ bgcolor: "red", width: "200px" }}>
              <Typography>{p.title}</Typography>
            </Card>
          ))}
        </>
      )}
    </Layout>
  );
};

export default HomePage;
