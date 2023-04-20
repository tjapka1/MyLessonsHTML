import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


 
function Layout():JSX.Element {
  
const navigate = useNavigate();
    
  return (
    <div>
      <h1>Мой Сайт</h1>
      <div>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=>navigate('/users/')}>Пользователи</button>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=> navigate('/msg/')}>Сообщение</button>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=> navigate('/post/')}>Посты</button>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=> navigate('/')}>Домой</button>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=> navigate(-1)}>Назад</button>
        <button type="button" className="btn btn-outline-primary" 
                onClick={()=> navigate(1)}>Вперёд</button>
      </div>
      <Outlet/>
    </div>
  );
}
export default Layout;
