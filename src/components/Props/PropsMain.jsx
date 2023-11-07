import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { PropsChild } from "./PropsChild";

export const PropsMain = () => {
  const [msg, setMsg] = useState("Default Msg..!!!");
  const [name, setName] = useState("Name");
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setName("Shahrukh");
    setNum(55);
  };

  return (
    <Grid align="center" container spacing={2}>
      <Grid item xs={12}>
        <h1>Parent Component</h1>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() =>
            setMsg("PickupBiz Learning") || setName("SRK") || setNum(55)
          }
          variant="contained"
          color="secondary"
          fullWidth
        >
          add
        </Button>
        <br />
        <br />
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          fullWidth
        >
          send by function
        </Button>
      </Grid>
      <PropsChild massage={msg} Name={name} Num={num} />
    </Grid>
  );
};
