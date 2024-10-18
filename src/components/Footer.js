import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0, background: '#FFE5F1'  }}  >
      <Toolbar>
        <Typography variant="body1" color="black">
          © 2024 Online Auction
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
