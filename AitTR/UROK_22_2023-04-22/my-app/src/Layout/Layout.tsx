import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FormInput from "../FormInput/FormInput";


function Layout():JSX.Element {
  
const navigate = useNavigate();
    
  return (
    <div>
      <h1>Мой Сайт</h1>
      <div>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=>navigate('/Comp1/')}>Comp1</button>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=>navigate('/Comp2/')}>Comp2</button>
        <FormInput/>
      </div>
      <Outlet/>
    </div>
  );
}
export default Layout;
