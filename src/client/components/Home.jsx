import React, { Component } from "react";
import "../assets/css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
const csInterface = new CSInterface();

class Home extends Component {
  startTimer = () => {
    alert("a");
  };

  openLink() {
    try {
      csInterface.openURLInDefaultBrowser(
        "https://github.com/Adobe-CEP/Samples"
      );
    } catch (e) {
      csInterface.evalScript(`alert("lỗi");`);
    }
  }

  openDialog = () => {
    try {
      let result = window.cep.fs.showOpenDialog(false, false, "Open", "", [
        "png",
        "jpg",
      ]);
      let path = result.data;
      csInterface.evalScript(
        "app.open(File('" + encodeURIComponent(path) + "'));"
      );
      console.log("a");
    } catch (e) {
      console.log("b");
    }
  };

  render() {
    return (
      <div className="tabset">
        <input
          type="radio"
          name="tabset"
          id="tab1"
          aria-controls="marzen"
          defaultChecked
        />
        <label htmlFor="tab1">Count Timer</label>

        <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
        <label htmlFor="tab2">Open Link</label>

        <input
          type="radio"
          name="tabset"
          id="tab3"
          aria-controls="timeCounter"
        />
        <label htmlFor="tab3">Open Dialog</label>

        <div className="tab-panels">
          <section id="marzen" className="tab-panel">
            <button onClick={() => this.startTimer()}>Start</button>
          </section>
          <section id="rauchbier" className="tab-panel">
            <button onClick={() => this.openLink()}>Open Link</button>
          </section>
          <section id="timeCounter" className="tab-panel">
            <button onClick={() => this.openDialog()}>Open Image</button>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
