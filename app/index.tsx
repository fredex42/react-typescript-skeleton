import React from "react";
import {BrowserRouter, withRouter} from "react-router-dom";
import {render} from "react-dom";

const App: React.FC<{}> = () => {
    return <h1>Hello world!</h1>
}

const AppWithRouter = withRouter(App);
render(
    <BrowserRouter>
        <AppWithRouter/>
    </BrowserRouter>,
    document.getElementById("app")
)