import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function Theme(props) {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: "#36a4d9" //blau
          },
          secondary: {
            main: "#f6a12a" //orange
          },
          error: {
            main: "#db3738" //rot
          },
          warning: {
            main: "#fdcb34" //gelb
          },
          info: {
            main: "#ec647a" //rosa
          },
          success: {
            main: "#34ae72" //grün
          }
        },
        typography: {
          fontFamily: [
            "Quicksand",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(",")
        }
      }),
    []
  );

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
