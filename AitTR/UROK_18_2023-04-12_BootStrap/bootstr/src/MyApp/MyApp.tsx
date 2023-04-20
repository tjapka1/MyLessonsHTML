import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../Users/Users";
import Msg from "../Msg/Msg";
import Post from "../Post/Post";
import Layout from "../Layout/Layout";

function MyApp ():JSX.Element {

  return(

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/users/" element = {<Users/>}/>
        <Route path="/msg/" element = {<Msg/>}/>
        <Route path="/post/" element = {<Post/>}/>

      </Route>
    </Routes>
  );
  
}
export default MyApp;