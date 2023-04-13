import Toolbar from "@mui/material/Toolbar";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "./SideBar";
// import LargeSearchInput from '../Form/LargeSearchInput';
import { Box, IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Stack } from "@mui/system";
import React, { Suspense } from "react";

const UserMenu = React.lazy(() => import("../Layout/UserMenu"));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderBottom: "1.5px dashed rgba(145, 158, 171, 0.24)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Appbar = (props: AppBarProps) => {
  return (
    <AppBar
      position="fixed"
      open={props.open}
      sx={{
        height: 79,
        width: { xs: "100%", md: "100%", mdP: `calc(100% - ${drawerWidth}px)` },
        p: { xs: "2px, 0px", sm: 1.9 },
        bgcolor: "#182444",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        {/* <Stack direction={"row"} alignItems="center">
          <Box display={{ xs: "block", md: "block", mdP: "none" }}>
            <MobileSideBar />
          </Box>
        </Stack> */}
        <Stack direction={"row"} gap={1} alignItems="center" mt={-1}>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ color: "#06314D" }}>
            <SettingsOutlinedIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Suspense fallback={"lloading"}>
            <UserMenu />
          </Suspense>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
