import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "../containers/ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";

import App from "./main";

import getStore from "../store";

export const { store, persistor } = getStore();

const Root = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

export default Root;
