import React from "react";
import { Box, Button } from "@material-ui/core";

const todo = props => {
  return (
    <div>
      {props.label}
      {props.data.map((item, index) => {
        return (
          <Box key={item.name} style={{ display: "flex" }}>
            <Box
              style={{
                color: `${item.isDone ? "green" : "black"}`,
                textDecoration: `${item.isDone ? "line-through" : ""}`
              }}
            >
              {item.name}
            </Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => props.toggleDone(item.name)}
            >
              Toggle
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => props.del(item.name)}
            >
              DELETE
            </Button>
          </Box>
        );
      })}
    </div>
  );
};

export default todo;
