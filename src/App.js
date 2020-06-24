import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Prem Mali</div>;
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById("app"));
