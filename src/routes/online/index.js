import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ContainerLayout from "../../components/ContainerLayout";
import MenuCard from "../../components/MenuCard";

class Online extends Component {
  render() {
    const navItems = this.props.main.nav.map(item => (
      <React.Fragment key={item.id}>
        <MenuCard
          image={item.image}
          title={item.title}
          history={this.props.history}
          to={"/home/" + item.id}
        ></MenuCard>
      </React.Fragment>
    ));

    return (
      <ContainerLayout title={this.props.main.orgName}>
        <Grid container spacing={3}>
          {navItems}
          {this.props.main.admin ? (
            <React.Fragment>
              <MenuCard
                image="#"
                title="Administration"
                history={this.props.history}
                to={"/admin"}
              ></MenuCard>
              <MenuCard
                image="#"
                title="Logout"
                history={this.props.history}
                to={"/signout"}
              ></MenuCard>
            </React.Fragment>
          ) : (
            ""
          )}
        </Grid>
      </ContainerLayout>
    );
  }
}

Online.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  main: state.main
});

export default connect(mapStateToProps, {})(Online);
