import { Route, Routes } from "react-router";

import { Index } from "./pages/HomePage";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route index element={<Index />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
