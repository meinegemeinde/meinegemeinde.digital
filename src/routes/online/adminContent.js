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
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import moment from "moment";

class AdminContent extends Component {
  newContent = { title: "", type: null, category: null, params: {} };

  constructor(props) {
    super(props);
    this.state = {
      content: this.props.media.items,
      categories: this.props.main.nav,
      newContent: Object.assign({}, this.newContent)
    };
  }

  handleChange = (id, field) => {
    return event => {
      if (id === -1) {
        let newState = this.state.newContent;
        newState[field] = event.target.value;
        this.setState({
          newContent: newState
        });
      } else {
        let newState = this.state.content;
        newState.find(elm => elm.id === id)[field] = event.target.value;
        this.setState({
          content: newState
        });
      }
    };
  };

  handleChangeParams = (id, field) => {
    return event => {
      if (id === -1) {
        let newState = this.state.newContent;
        newState.params[field] = event.target.value;
        this.setState({
          newContent: newState
        });
      } else {
        let newState = this.state.content;
        newState.find(elm => elm.id === id).params[field] = event.target.value;
        this.setState({
          content: newState
        });
      }
    };
  };

  handleSubmit = id => {
    return event => {
      if (id === -1) {
        let newState = this.state.content;
        newState.unshift({
          ...this.state.newContent,
          date: moment()
        });
        this.setState({
          content: newState,
          newContent: Object.assign({}, this.newContent)
        });
      }
    };
  };

  handleDelete = id => {
    return event => {
      let newState = this.state.content;
      newState.splice(
        newState.findIndex(elm => elm.id === id),
        1
      );
      this.setState({
        content: newState
      });
    };
  };

  handleCancel = id => {
    return event => {};
  };

  render() {
    const categories = this.state.categories
      .filter(elm => elm.type === "content")
      .map(row => (
        <MenuItem value={row.id} key={row.id}>
          {row.title}
        </MenuItem>
      ));
    const panels = this.state.content.map(row => (
      <ExpansionPanel key={row.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              flexBasis: "33.33%",
              flexShrink: 0
            }}
          >
            {row.title}
          </Typography>
          <Typography>
            <small>{row.date.format("DD.MM.YYYY HH:mm")}</small>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                label="Titel"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={this.handleChange(row.id, "title")}
                value={row.title}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                select
                label="Kategorie"
                variant="outlined"
                value={row.category}
                style={{ width: "100%" }}
                onChange={this.handleChange(row.id, "category")}
              >
                {categories}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                select
                label="Type"
                variant="outlined"
                style={{ width: "100%" }}
                value={row.type}
                onChange={this.handleChange(row.id, "type")}
              >
                <MenuItem value={"text"}>Text</MenuItem>
                <MenuItem value={"audio"}>Audio</MenuItem>
              </TextField>
            </Grid>
            {row.type === "audio" ? (
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Link zum Audio"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={row.params.src}
                  onChange={this.handleChangeParams(row.id, "src")}
                ></TextField>
              </Grid>
            ) : row.type === "text" ? (
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Text"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={row.params.text}
                  onChange={this.handleChangeParams(row.id, "text")}
                  rows={10}
                  multiline
                ></TextField>
              </Grid>
            ) : (
              ""
            )}
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
            <Typography>Neuer Inhalt</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Titel"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={this.handleChange(-1, "title")}
                  value={this.state.newContent.title}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  select
                  label="Kategorie"
                  variant="outlined"
                  value={this.state.newContent.category}
                  style={{ width: "100%" }}
                  onChange={this.handleChange(-1, "category")}
                >
                  {categories}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  select
                  label="Type"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={this.state.newContent.type}
                  onChange={this.handleChange(-1, "type")}
                >
                  <MenuItem value={"text"}>Text</MenuItem>
                  <MenuItem value={"audio"}>Audio</MenuItem>
                </TextField>
              </Grid>
              {this.state.newContent.type === "audio" ? (
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    label="Link zum Audio"
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={this.state.newContent.params.src}
                    onChange={this.handleChangeParams(-1, "src")}
                  ></TextField>
                </Grid>
              ) : this.state.newContent.type === "text" ? (
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    label="Text"
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={this.state.newContent.params.text}
                    onChange={this.handleChangeParams(-1, "text")}
                    rows={10}
                    multiline
                  ></TextField>
                </Grid>
              ) : (
                ""
              )}
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

AdminContent.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin,
  main: state.main,
  media: state.media
});

export default connect(mapStateToProps, {})(AdminContent);
