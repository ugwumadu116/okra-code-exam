import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import store from "./store";
import Root from "./routes/Root";

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
