import React from "react";
import { Box, Button } from "@material-ui/core";

const completedTodo = props => {
  return (
    <Box>
      Completed TODO :
      {props.data.map((item, index) => {
        return (
          <Box key={item.name + index}>
            {item.name}
            <Button
              variant="outlined"
              color="primary"
              onClick={() => props.toggleDone(index)}
            >
              Toggle
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default completedTodo;
