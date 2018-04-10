import App from "./App";
import BrowserRouter from "react-router-dom/BrowserRouter";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = function(state = window.__PRELOADED_STATE__, action){
  return state
}

const store = createStore(reducer);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
