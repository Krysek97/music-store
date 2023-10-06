import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from '../item/Add';
import A_Guitars from "../item/categories/guitar/A_Guitars";
import C_Guitars from "../item/categories/guitar/C_Guitars";
import E_Guitars from "../item/categories/guitar/E_Guitars";
import A_Bass from "../item/categories/bass/A_Bass";
import E_Bass from "../item/categories/bass/E_Bass";
import A_Drums from "../item/categories/drums/A_Drums";
import E_Drums from "../item/categories/drums/E_Drums";
import Categories from "../item/categories/Categories";


function Pages(){

    return(
        <Routes>
            <Route path="/add_item" element={<Add/>}/>
            <Route path="/a_guitars" element={<A_Guitars/>}/>
            <Route path="/c_guitars" element={<C_Guitars/>}/>
            <Route path="/e_guitars" element={<E_Guitars/>}/>
            <Route path="/a_basses" element={<A_Bass/>}/>
            <Route path="/e_basses" element={<E_Bass/>}/>
            <Route path="/drums" element={<A_Drums/>}/>
            <Route path="/e_drums" element={<E_Drums/>}/>
            <Route path="/categories" element={<Categories/>}/>
        </Routes>
    )

}
export default Pages;