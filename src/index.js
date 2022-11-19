import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UiContextProvider } from "./context/UiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UiContextProvider>
                <App />
            </UiContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
