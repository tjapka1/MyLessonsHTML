import React from "react";
import { Routes, Route } from "react-router-dom";
import Comp from "../Comp/Comp";
import Comp1 from "../Comp1/Comp1";
import Comp2 from "../Comp2/Comp2";

import Layout from "../Layout/Layout";

function MyApp ():JSX.Element {

  return(

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/Comp/1" element = {<Comp1/>}/>
        <Route path="/Comp/2" element = {<Comp2/>}/>
        <Route path="/Comp/:id" element = {<Comp />}/>
      
      </Route>
    </Routes>
  );
  
}
export default MyApp;