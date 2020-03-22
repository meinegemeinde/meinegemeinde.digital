import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

class MediaTest extends Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" component="p">
        {this.props.text.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
      </Typography>
    );
  }
}

MediaTest.propTypes = {
  text: PropTypes.string.isRequired
};

export default MediaTest;
