import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class MenuCard extends Component {
  render() {
    return (
      <Grid item xs={12} md={4} lg={3}>
        <Card onClick={() => this.props.history.push(this.props.to)}>
          <CardActionArea>
            {this.props.image ? (
              <CardMedia
                style={{ height: 140 }}
                image={this.props.image}
                title={this.props.title}
              />
            ) : (
              ""
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default MenuCard;
