import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

export const isELEC = (navigator.userAgent.toLowerCase().search('electron') >=0);

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
