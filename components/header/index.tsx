import React, { useState } from "react";
import Img from "next/image";
import Link from "next/link";
import { useUser } from "providers";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { AuthMenu } from "./AuthMenu";
import { Drawer } from "components/elements";

const AppHeader = () => {
  const { user } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container fixed>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {/* <StaticImage
                  src="../../img/icon.png"
                  alt="company logo"
                  placeholder="blurred"
                  layout="fixed"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                /> */}
              </Typography>
              {user ? (
                <AuthMenu />
              ) : (
                <Link href="/login">
                  <a>
                    <Button
                      color="inherit"
                      size="large"
                      style={{ display: "inline-block", color: "#fff" }}
                    >
                      Log In
                    </Button>
                  </a>
                </Link>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
};

export default AppHeader;
