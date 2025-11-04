import { Route, Routes } from "react-router";

import { Index } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Index />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
