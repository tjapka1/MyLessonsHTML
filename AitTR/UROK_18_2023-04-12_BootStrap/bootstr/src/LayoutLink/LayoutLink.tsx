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
          <Link to = "/users/">
            <li>Пользователи</li>
          </Link>
          <Link to = "/post/">
            <li>Посты</li>
          </Link>
        </ul>

         
      </div>
      <Outlet/>
    </div>
  );
}
export default LayoutLink;
