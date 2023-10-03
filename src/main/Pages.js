import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from '../item/Add';
import Upload from '../images/uploading/Upload';


function Pages(){

    return(
        <Routes>
            <Route path="/add_item" element={<Add/>}/>
            <Route path="/image" element={<Upload/>}/>
        </Routes>
    )

}
export default Pages;