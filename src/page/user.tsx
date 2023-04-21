import Iconify from "@iconify/iconify";
import { Fragment } from "react";
import Layout from "../components/Layout";
import { useGetUsersQuery } from "../core/redux/users/users.api";
import {
  Box,
  Card,
  Grid,
  Grow,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";

const UserPage = () => {
  const { data, isLoading, error } = useGetUsersQuery(5);
  return (
    <Layout>
      {isLoading ? (
        "Loading"
      ) : (
        <Stack direction={"column"} gap={3}>
          <Typography fontSize={"28px"} fontWeight={600}>
            All Users
          </Typography>
          <Grid container spacing={3} mb={4}>
            {data?.map((p) => (
              <Grid key={p.id} item xs={12} sm={12} md={4}>
                <Card sx={{ boxShadow: 3 }}>
                  <Stack direction={"column"} alignItems={"center"} p={5}>
                    <Stack direction={"row"} gap={2} textAlign={"center"}>
                      <h4>
                        {p.name} {p.username}
                      </h4>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </Layout>
  );
};

export default UserPage;
