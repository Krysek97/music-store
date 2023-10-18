import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from '../item/Add';
import ItemCategory from "../item/categories/ItemCategory";
import Categories from "../item/categories/Categories";
import Login from "../security/Login";


function Pages(){

    return(
        <Routes>
            <Route path="/add_item" element={<Add/>}/>
            <Route path="/a_guitars" element={<ItemCategory category="A_GUITAR" />}/>
            <Route path="/c_guitars" element={<ItemCategory category="C_GUITAR"/>}/>
            <Route path="/e_guitars" element={<ItemCategory category="E_GUITAR"/>}/>
            <Route path="/e_basses" element={<ItemCategory category="E_BASS"/>}/>
            <Route path="/a_basses" element={<ItemCategory category="A_BASS"/>}/>
            <Route path="/drums" element={<ItemCategory category="A_DRUMS"/>}/>
            <Route path="/e_drums" element={<ItemCategory category="E_DRUMS"/>}/>
            <Route path="/" element={<Categories/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )

}
export default Pages;