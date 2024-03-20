const Cakes = ({title, cakeName, ingredients, price, rating}) =>{
    return (
        
        <ul>
            <h4>{cakeName} </h4>
            <h4>Ingredients: </h4> 
            {ingredients}
            <h4>Price: {price}</h4> 
            <h4>Rating: {rating}</h4>
        </ul>

)
}

export default Cakes;