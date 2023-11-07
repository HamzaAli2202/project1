import { Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const ApiFetch = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid align="center" container spacing={2}>
      <Grid item xs={12}>
        <h1>Api Fetch</h1>
      </Grid>
      {data.map((item) => (
        <Grid item xs={3}>
          <img style={{ height: 150, width: 150 }} src={item.image} alt="" />
          <h3>{item.title.slice(0, 10)}</h3>
          <h4>₹ {item.price}</h4>
          <Rating value={item.rating.rate} />
          <span>({item.rating.count})</span>
        </Grid>
      ))}
    </Grid>
  );
};
