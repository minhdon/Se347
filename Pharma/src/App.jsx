import { Route, Routes } from "react-router";

import { Index } from "./index/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<Index />}></Route>
    </Routes>
  );
}

export default App;
