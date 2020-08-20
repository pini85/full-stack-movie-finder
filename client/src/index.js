import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import { GlobalStyle } from "./globalStyles.styles";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
