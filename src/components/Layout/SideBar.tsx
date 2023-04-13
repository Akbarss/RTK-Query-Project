import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Avatar,
  Stack,
  Typography,
  ListItemButton,
  ListItemIcon,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import navConfig from "./NavConfig";
import { useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/react.svg";
// custom
type Props = {
  open: boolean;
};

export const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRight: "1.5px dashed #fff",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  zIndex: 10,
  backgroundColor: "#182444",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  borderRight: "#fff",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
  backgroundColor: "red",
}));

const SideBar = (props: Props) => {
  const { pathname }: any = useLocation();
  const uRouter = pathname.slice(1, 4);

  return (
    <Drawer variant="permanent" open={props.open}>
      <Stack direction={"column"} spacing={1} mt={1.8}>
        <DrawerHeader
          sx={{
            borderBottom: "1.5px dashed #fff",
            width: "100%",
            boxShadow: "10px",
            backgroundColor: "#091023",
          }}
        >
          <NavLink to={"/"}>
            <Avatar
              src={logo}
              sx={{ width: 64, height: 64, position: "relative", top: "-5px" }}
              alt="img"
            />
          </NavLink>
        </DrawerHeader>
        <List>
          <Stack direction={"column"} spacing={0.56}>
            {navConfig.map((i) =>
              i.title === "Divider" ? (
                <ListItem key={uuidv4()} sx={{ display: "block" }}>
                  <Divider sx={{ border: "1px dashed #fff" }} />
                </ListItem>
              ) : (
                <Link style={{ textDecoration: "none" }} to={i.path} key={uuidv4()}>
                  <ListItem
                    sx={{
                      transition: " 44554s ease-in",
                      bgcolor: uRouter == i.keyrouter ? "#091023" : "none",
                      borderRight: uRouter == i.keyrouter ? "3.2px solid #fff" : "azure",
                    }}
                    key={uuidv4()}
                    disablePadding
                  >
                    <ListItemButton sx={{ px: 2, color: "#7C87F1", pl: 2.4 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          justifyContent: "center",
                          color: uRouter == i.keyrouter ? "#acb6c4" : "#fff",
                          mr: 1.7,
                        }}
                      >
                        {i.icon}
                      </ListItemIcon>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: uRouter == i.keyrouter ? "#acb6c4" : "#fff",
                          fontWeight: 600,
                        }}
                      >
                        {i.title}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
            )}
          </Stack>
        </List>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
