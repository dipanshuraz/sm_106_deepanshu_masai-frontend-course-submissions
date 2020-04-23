import React, { Component } from "react";
import { Box, Input, Button } from "@material-ui/core";
import styles from "../App.css";
class add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: ""
    };
  }

  render() {
    return (
      <Box classes={{ root: styles.box }}>
        <Input
          innerRef={this.itemName}
          onChange={e => this.setState({ itemName: e.target.value })}
          color="primary"
        ></Input>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => this.props.add(this.state.itemName)}
        >
          Click To ADD
        </Button>
      </Box>
    );
  }
}
export default add;
