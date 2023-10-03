import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import './css/add.css';

function Add() {

    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const handleModelChange = (e) => {
        setModel(e.target.value);
    }
    const handleBrandChange = (e) => {
        console.log(e.target.value)
        setBrand(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleImageSelect = (event) => {
        setImage(getBase64(event.target.files[0]))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Dodano przedmiot');

        const body = {
            model: model,
            brand: brand,
            price: price,
            category: category,
            image: image,
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

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            // Create file reader
            let reader = new FileReader()
        
            // Register event listeners
            reader.addEventListener("loadend", e => resolve(e.target.result))
            reader.addEventListener("error", reject)
        
            // Read file
            reader.readAsArrayBuffer(file)
          })
    }


    return (
        <div class='form'>
            <form method='POST' onSubmit={(e) => { handleSubmit(e) }}>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Brand</label>
                    <div class="col-sm-10">
                        <input name='brand' class="form-control" type="text" value={brand} required onChange={(e) => { handleBrandChange(e) }}></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Model</label>
                    <div class="col-sm-10">
                        <input name='model' class="form-control" type="text" value={model} required onChange={(e) => { handleModelChange(e) }}></input>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Price</label>
                    <div class="col-sm-10">
                        <input name='price' class="form-control" type="number" value={price} required onChange={(e) => { handlePriceChange(e) }}></input>
                    </div>
                </div>
                <div class="col-auto">
                    <label class="visually-hidden" >Category</label>
                    <select name='category' class="form-select" id="autoSizingSelect" value={category} required onChange={(e) => { handleCategoryChange(e) }}>
                        <option selected>Category</option>
                        <option value="GUITAR">Guitar</option>
                        <option value="BASS">Bass</option>
                        <option value="DRUMS">Drums</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input name="image" class="form-control" type="file" id="formFile" required onChange={(e) => { handleImageSelect(e) }}></input>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" class="btn btn-outline-warning">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Add;