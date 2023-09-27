import React from "react";
import { Route, Routes } from "react-router-dom";
import App from '../App';
import Add from '../item/Add';


function Pages(){

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/add_item" element={<Add/>}/>
        </Routes>
    )

}
export default Pages;