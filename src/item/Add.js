import React, { useState } from "react";
import axios from "axios";
import './css/add.css';

function Add() {

    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null)



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
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleImageSelect = (e) => {
        setImage((e.target.files[0]));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Dodano przedmiot');

        const bodyImage = {
            image: image,
        }

        const bodyItem = {
            model: model,
            brand: brand,
            price: price,
            category: category,
            description: description
        };

        let configImage = {
            headers: {
                'Content-Type': "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
        };

        let configItem = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };


        axios.post("http://localhost:8080/item/add", bodyItem, configItem)
            .then((response) => {
                axios.post("http://localhost:8080/image/add/" + response.data.id, bodyImage, configImage)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
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
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" type="text" value={description} required onChange={(e) => {handleDescriptionChange(e)}} rows="3"></textarea>
                </div>
                <div class="col-auto">
                    <label class="visually-hidden" >Category</label>
                    <select name='category' class="form-select" id="autoSizingSelect" value={category} required onChange={(e) => { handleCategoryChange(e) }}>
                        <option selected>Category</option>
                        <option value="A_GUITAR">Acoustic Guitar</option>
                        <option value="E_GUITAR">Electric Guitar</option>
                        <option value="C_GUITAR">Classic Guitar</option>
                        <option value="E_BASS">Electric Bass</option>
                        <option value="A_BASS">Acoustic Bass</option>
                        <option value="A_DRUMS">Acoustic Drums</option>
                        <option value="E_DRUMS">E-Drums</option>
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