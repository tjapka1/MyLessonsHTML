import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

 
function LayoutLink():JSX.Element {
  
const navigate = useNavigate();
    
  return (
    <div>
      <h1>Мой Сайт</h1>
      <div>

        <ul>
          <Link to = "/Comp1/">
            <li>Comp1</li>
          </Link>
          <Link to = "/Comp2/">
            <li>Comp2</li>
          </Link>
          
          <Outlet />
        </ul>
        
      </div>
      <Outlet/>
    </div>
  );
}
export default LayoutLink;
