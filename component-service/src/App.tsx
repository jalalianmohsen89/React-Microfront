import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";
import MyButton from "./MyButton";

const App = () => (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'500px',height:'100vh',margin:'0 auto'}}>
      <p style={{display:'flex',direction:'rtl'}}>این پروژه component service است که در حال اجرا است</p>
      <MyButton/>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
