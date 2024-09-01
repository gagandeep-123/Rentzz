import React from "react";
import Homepage from "./Pages/Homepage";
import Landingpage from "./Pages/Landingpage";
import Body from "./Body";
import { Provider } from "react-redux";
import appstore from "./Slices/appstore";

const App = () => {
  return (
    <div>
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
