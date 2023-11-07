import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export const ToDoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleClear = () => {
    setText("");
  };

  const handleDelete = (index) => {
    const result = data.filter((item, i) => i !== index);
    setData(result);
  };
  return (
    <Grid align="center" container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ color: "brown" }}>ToDoList</h1>
      </Grid>
      <Grid item xs={8}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Here"
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => setData([...data, text])}
          sx={{ height: 55 }}
          variant="contained"
          fullWidth
          color="success"
        >
          add
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={handleClear}
          sx={{ height: 55 }}
          variant="contained"
          fullWidth
          color="error"
        >
          clear
        </Button>
      </Grid>
      {data.map((item, index) => (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>{index + 1}</h2>
              <h1>{item}</h1>
              <Button
                onClick={() => handleDelete(index)}
                variant="contained"
                color="error"
              >
                delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
