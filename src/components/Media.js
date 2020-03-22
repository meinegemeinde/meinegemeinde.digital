import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconMusicNote from "@material-ui/icons/MusicNote";
import IconSubject from "@material-ui/icons/Subject";

import MediaText from "./MediaText";
import MediaAudio from "./MediaAudio";

class Media extends Component {
  loadMedia = (type, params) => {
    switch (this.props.type) {
      case "text":
        return <MediaText text={params.text}></MediaText>;
      case "audio":
        return <MediaAudio src={params.src}></MediaAudio>;
      default:
        return <div>Error</div>;
    }
  };

  loadMediaAvatar = type => {
    switch (this.props.type) {
      case "text":
        return <IconSubject />;
      case "audio":
        return <IconMusicNote />;
      default:
        return <span></span>;
    }
  };

  render() {
    return (
      <Grid item xs={12} md={12} lg={12}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {this.loadMediaAvatar(this.props.type)}
              </Avatar>
            }
            title={this.props.title}
            subheader={this.props.date.format("DD.MM.YYYY HH:mm")}
          />
          <CardContent>
            {this.loadMedia(this.props.type, this.props.params)}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

Media.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired
};

export default Media;
