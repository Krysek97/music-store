import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from '../item/Add';
import Upload from '../images/uploading/Upload';
import A_Guitars from "../item/categories/guitar/A_Guitars";


function Pages(){

    return(
        <Routes>
            <Route path="/add_item" element={<Add/>}/>
            <Route path="/image" element={<Upload/>}/>
            <Route path="/a_guitars" element={<A_Guitars/>}/>
        </Routes>
    )

}
export default Pages;