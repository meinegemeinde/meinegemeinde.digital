import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Copyright from "../../components/Copyright";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: this.props.main
    };
  }

  render() {
    return (
      <Grid
        container
        component="main"
        style={{
          height: "100vh"
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: "url(/images/Gebet.jpg)",
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div
            style={{
              margin: "64px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography component="h1" variant="h5">
              Christen Nürnberg
            </Typography>
            <form
              style={{
                width: "100%", // Fix IE 11 issue.
                marginTop: "1px"
              }}
              noValidate
              onSubmit={e => {
                e.preventDefault();
                let newState = this.state.main;
                newState.admin = true;
                this.setState({
                  main: newState
                });
                this.props.history.push("/home");
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Adresse"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Passwort"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  margin: "3px 0 2px"
                }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Passwort vergessen?
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  main: state.main
});

export default connect(mapStateToProps, {})(SignIn);
