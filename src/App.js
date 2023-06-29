import React from "react";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Secondary from "./Pages/Secondary";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />

        <Route
          path="/main"
          element={<Main />}
        />
        <Route
          path="/secondary"
          element={<Secondary />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
