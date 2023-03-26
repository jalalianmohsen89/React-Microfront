import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: component-service</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
