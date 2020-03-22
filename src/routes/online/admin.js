import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ContainerLayout from "../../components/ContainerLayout";
import MenuCard from "../../components/MenuCard";

class OnlineAdmin extends Component {
  render() {
    const navItems = this.props.admin.nav.map(item => (
      <React.Fragment key={item.id}>
        <MenuCard
          image={item.image}
          title={item.title}
          history={this.props.history}
          to={"/admin/" + item.id}
        ></MenuCard>
      </React.Fragment>
    ));

    return (
      <ContainerLayout
        title="Administration"
        history={this.props.history}
        back={true}
      >
        <Grid container spacing={3}>
          {navItems}
        </Grid>
      </ContainerLayout>
    );
  }
}

OnlineAdmin.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect(mapStateToProps, {})(OnlineAdmin);
