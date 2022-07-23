import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Application } from "./Application";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./ducks/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Application />
        </header>
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
