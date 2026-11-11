import {Navigate,Outlet} from "react-router-dom"; // Outlet is a children in a recat router dom
import { useAppData } from "../context/AppContext";

const PublicRoutes=()=>{
  const{isAuth,loading} = useAppData();

  if(loading) return null;

  return isAuth ? <Navigate to="/" replace/>:<Outlet/>

};

export default PublicRoutes;
