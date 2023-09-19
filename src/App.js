import React from "react";
import GamePages from "./components/GamePages";
import { GlobalProvider } from "./GlobalProvider";
// App component is used to render the GamePages component.

const App = () => (
  <GlobalProvider>
    <div className="App">
      <GamePages />
    </div>
  </GlobalProvider>
);

export default App;
