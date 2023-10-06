import "../css/categories.css";

function Categories() {

    return (
        <div class="conatiner">
            <div class="wrap">

                <a class="box one" href="/a_guitars">
                    <h1> ACOUSTIC GUITARS </h1>
                </a>

                <a class="box two" href="/c_guitars">
                    <h1>CLASSIC GUITARS</h1>
                </a>

                <a class="box three" href="/e_guitars">
                    <h1>ELECTRIC GUITARS</h1>
                </a>

                <a class="box five" href="/a_basses">
                    <h1>ACOUSTIC BASSES</h1>
                </a>

                <a class="box six" href="/e_basses">
                    <h1>ELECTRIC BASSES</h1>
                </a>

                <a class="box seven" href="/drums">
                    <h1>ACOUSTIC DRUMS</h1>
                </a>

                <a class="box eight" href="/e_drums"> 
                    <h1>E-DRUMS</h1>
                </a>
            </div>
        </div>
    )

}
export default Categories;