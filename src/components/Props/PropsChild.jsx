import React from "react";
import { Grid } from "@mui/material";
export const PropsChild = ({ massage, Name, Num }) => {
  return (
    <Grid item xs={12}>
      <h1>Child Component</h1>
      <h2>{massage}</h2>
      <h1>
        {Name} & {Num}
      </h1>
    </Grid>
  );
};
