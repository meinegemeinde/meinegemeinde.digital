import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ContainerLayout from "../../components/ContainerLayout";
import Media from "../../components/Media";

class OnlineCategory extends Component {
  render() {
    const mediaList = this.props.media.items
      .filter(item => item.category === this.props.match.params.category)
      .map(item => (
        <Media
          type={item.type}
          title={item.title}
          date={item.date}
          params={item.params}
        ></Media>
      ));
    return (
      <ContainerLayout
        title={
          this.props.main.nav.find(
            elm => elm.id === this.props.match.params.category
          ).title
        }
        history={this.props.history}
        back={true}
      >
        <Grid container spacing={3}>
          {this.props.match.params.category === "seelsorge" ? (
            <h3>Hier wird bald ein Seelsorgechat integriert</h3>
          ) : (
            mediaList
          )}
        </Grid>
      </ContainerLayout>
    );
  }
}

OnlineCategory.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  main: state.main,
  media: state.media
});

export default connect(mapStateToProps, {})(OnlineCategory);
