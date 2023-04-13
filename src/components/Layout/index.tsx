import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideBar from "./SideBar";
import Appbar from "./AppBar";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [open] = React.useState(true);
  return (
    <>
      <Box display={"flex"}>
        <CssBaseline />
        <Appbar open={open} />
        <Box component="main">
          <SideBar open={open} />
        </Box>
        <Box className="contaent-bg" width={"100%"} display="flex" justifyContent={"right"}>
          <Box width={"100%"} sx={{ marginTop: { xs: 9, sm: 10 } }} p={4}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
