import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../Users/Users";
import UserPosts from "../UserPosts/UserPosts";
import Bootstrap from "../Bootstrap/Bootstrap";
import Msg from "../Msg/Msg";
import Post from "../Posts/Post";
import Layout from "../Layout/Layout";

function MyApp ():JSX.Element {

  return(

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/users/" element = {<Users/>}/>
        <Route path="/userPosts/" element = {<UserPosts/>}/>
        <Route path="/msg/" element = {<Msg/>}/>
        <Route path="/post/" element = {<Post/>}/>
        <Route path="/bootstrap/"  element = {<Bootstrap />} />
      </Route>
    </Routes>
  );
  
}
export default MyApp;