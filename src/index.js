import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UiContextProvider } from "./context/UiContext";

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UiContextProvider>
                <App />
            </UiContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    root
);
