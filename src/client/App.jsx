/**
 * @author Tomer Riko Shalev
 */

import React from "react";

import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

import cyan from "@material-ui/core/colors/cyan";

import { createMuiTheme } from "@material-ui/core/styles";
import Home from "./components/Home";

const styles = {
  root: {
    width: "100%",
    height: "100vh",
  },
};

/**
 * main app component
 *
 */
export default class App extends React.Component {
  /**
   * execute the plugin
   *
   * @param  {type} options description
   */
  onExecutePlugin = (options) => {
    console.log("App:: onExecutePlugin");
    // here disable UI
    this._controller.invokePlugin(options);
    // here enable ui
  };

  render() {
    return (
      <div style={styles.root}>
        <Home />
      </div>
    );
  }
}
