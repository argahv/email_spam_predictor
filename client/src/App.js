import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import AppContainer from "./container";

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
