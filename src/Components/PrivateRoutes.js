import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  console.log("PrivateRoutes");
  console.log("localStorage.getItem('token'): ", localStorage.getItem("token"));
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
