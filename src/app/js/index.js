import { render } from "react-dom";
import React from "react";
import Main from "./components/Main";

const containerEl = document.getElementById("app");

class App extends React.Component {
    render () {
        return <p> Hello React!</p>;
    }
}

render(<Main/>, containerEl);