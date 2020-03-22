import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ContainerLayout from "../../components/ContainerLayout";

class AdminMember extends Component {
  render() {
    return (
      <ContainerLayout
        title="Mitglieder"
        history={this.props.history}
        back={true}
      >
        <Grid container spacing={3}></Grid>
      </ContainerLayout>
    );
  }
}

AdminMember.propTypes = {
  history: PropTypes.object.isRequired
};

export default AdminMember;
