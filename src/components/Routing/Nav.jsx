import React from "react";
import { navData } from "./navData";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Grid container spacing={2}>
      {navData.map((item) => (
        <Grid item xs={3}>
          <Link to={item.path}>
            <Button variant="contained" fullWidth color="warning">
              {item.title}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
