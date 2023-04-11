import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [open] = React.useState(true);
  return (
    <>
      <>
        <Box width={"100%"}>{props.children}</Box>
      </>
    </>
  );
};

export default Layout;
