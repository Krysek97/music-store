function Item(item) {

    item = item.item
    const imageLink = "http://localhost:8080/image/"


    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={imageLink+item.id} />
            <div class="card-body">
                <h5 class="card-title">{item.brand}</h5>
                <p class="card-text">{item.description}</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Add to cart</a>
            </div>
        </div>
    )

}
export default Item;