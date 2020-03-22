import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContainerLayout from "../../components/ContainerLayout";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class AdminCategory extends Component {
  newCategory = { title: "", id: "", type: "content", image: "" };

  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.main.nav,
      newCategory: Object.assign({}, this.newCategory)
    };
  }

  handleChange = (id, field) => {
    return event => {
      if (id === -1) {
        let newState = this.state.newCategory;
        newState[field] = event.target.value;
        this.setState({ newCategory: newState });
      } else {
        let newState = this.state.categories;
        newState.find(elm => elm.id === id)[field] = event.target.value;
        this.setState({ categories: newState });
      }
    };
  };

  handleSubmit = id => {
    return event => {
      if (id === -1) {
        let newState = this.state.categories;
        newState.unshift(this.state.newCategory);
        this.setState({
          categories: newState,
          newCategory: Object.assign({}, this.newCategory)
        });
      }
    };
  };

  handleDelete = id => {
    return event => {
      let newState = this.state.categories;
      newState.splice(
        newState.findIndex(elm => elm.id === id),
        1
      );
      this.setState({
        categories: newState
      });
    };
  };

  handleCancel = id => {
    return event => {};
  };

  render() {
    const panels = this.state.categories
      .filter(elm => elm.type === "content")
      .map(row => (
        <ExpansionPanel key={row.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{row.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  disabled
                  label="ID"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(row.id, "id")}
                  value={row.id}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(row.id, "title")}
                  value={row.title}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Bild"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(row.id, "image")}
                  value={row.image}
                ></TextField>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small" onClick={this.handleDelete(row.id)}>
              Löschen
            </Button>
            <Button size="small" onClick={this.handleCancel(row.id)}>
              Abbrechen
            </Button>
            <Button
              size="small"
              onClick={this.handleSubmit(row.id)}
              color="primary"
            >
              Speichern
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      ));

    return (
      <ContainerLayout title="Inhalt" history={this.props.history} back={true}>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary>
            <Typography>Neuer Kategorie</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="ID"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(-1, "id")}
                  value={this.state.newCategory.id}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(-1, "title")}
                  value={this.state.newCategory.title}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Bild"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(-1, "image")}
                  value={this.state.newCategory.image}
                ></TextField>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small" onClick={this.handleCancel(-1)}>
              Abbrechen
            </Button>
            <Button
              size="small"
              onClick={this.handleSubmit(-1)}
              color="primary"
            >
              Hinzufügen
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        {panels}
      </ContainerLayout>
    );
  }
}

AdminCategory.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin,
  main: state.main,
  media: state.media
});

export default connect(mapStateToProps, {})(AdminCategory);
