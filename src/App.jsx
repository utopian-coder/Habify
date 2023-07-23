import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
