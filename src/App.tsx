import React from "react";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routing/AppRouter";
import { globalStore } from "./redux/globalStore";

function App() {
  return (
    <StoreProvider store={globalStore}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
