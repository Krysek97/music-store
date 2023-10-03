import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const Form = () => {
  // a local state to store the currently selected file.
  const [image, setImage] = useState(null);

  const handleImageSelect = (event) => {
    setImage((event.target.files[0]))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dodano przedmiot');
    const body = {
      image: image,
    };
    console.log(body);
    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      }
    };

    axios.post("http://localhost:8080/image/add", body, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input name="image" class="form-control" type="file" id="formFile" required onChange={(e) => { handleImageSelect(e) }}></input>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-outline-warning">Add</button>
      </div>
    </form>
  )
};

export default Form;