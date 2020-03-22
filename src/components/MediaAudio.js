import React, { Component } from "react";
import PropTypes from "prop-types";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import AudioPlayer from "material-ui-audio-player";
// import ReactAudioPlayer from "react-audio-player";

const muiTheme = createMuiTheme({});

class MediaAudio extends Component {
  render() {
    return (
      <ThemeProvider theme={muiTheme}>
        <AudioPlayer
          elevation={0}
          width="100%"
          variation="default"
          preload={true}
          src={this.props.src}
        />
      </ThemeProvider>
    );
  }
}

MediaAudio.propTypes = {
  src: PropTypes.string.isRequired
};

export default MediaAudio;
