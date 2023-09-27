import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import './css/add.css';

function Add() {

    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleModelChange = (e) => {
        setModel(e.target.value);
    }
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            model: model,
            brand: brand,
            price: price,
            category: category,
        };
        console.log(body);
        let config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post("http://localhost:8080/item/add", body, config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div class='form'>
            <form>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Brand</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail3"></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Model</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingSelect">Category</label>
                    <select class="form-select" id="autoSizingSelect">
                        <option selected>Category</option>
                        <option value="GUITAR">Guitar</option>
                        <option value="BASS">Bass</option>
                        <option value="DRUMS">Drums</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}

export default Add;