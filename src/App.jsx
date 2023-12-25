import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import PrivateRoutes from "./Components/PrivateRoutes.js";
import Home from "./Pages/Home.jsx";
import Error from "./Components/Error.jsx";
import NavBar from "./Components/NavBar.jsx";
import Cart from "./Pages/Cart.jsx";

function App() {
  return (
    <div>
      <div className="bg-slate-900">
        <NavBar />
      </div>

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/homeProtectedRoute" />
          <Route element={<Cart />} path="/cartProtectedRoute" />
        </Route>
        <Route index element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
