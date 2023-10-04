import axios from "axios";
import { useEffect, useState } from "react";

function Item(item) {
    item = item.item

    const [image, setImage] = useState([]);
    const [count, setCount] = useState(-1);

    useEffect(() => {
        fetchImage();
        setCount(1);
    })

    const fetchImage = () => {
        if (count < 0) {
            let configImage = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*"
                }
            };
            axios.get('http://localhost:8080/image/' + item.id, configImage)
                .then((res) => {
                    setImage(res.data)
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }


    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={image.image} alt="icons" />
            <div class="card-body">
                <h5 class="card-title">{item.brand}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Add to cart</a>
            </div>
        </div>
    )

}
export default Item;