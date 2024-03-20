import { useState } from "react";
import Cakes from "../components/cakes";
const CakesContainer = () =>{

    const [victoriaSponge, setVictoriaSponge] = useState({
		cakeName: "Victoria Sponge",
	   	ingredients: [
   			"eggs",
      		"butter",
	      	"sugar",
   		   	"self-raising flour",
      		"baking powder",
	      	"milk"
  		],
	  	price: 5,
   		rating: 5
	});

    const [teaLoaf, setTeaLoaf] = useState({
        cakeName: "Tea Loaf",
          ingredients: [
              "eggs",
             "oil",
             "dried fruit",
             "sugar",
             "self-raising flour",
             "strong tea",
         ],
         price: 2,
         rating: 3
   });

    const [carrotCake, setCarrotCake] = useState(
        {
            cakeName: "Carrot Cake",
              ingredients: [
                   "carrots",
                     "walnuts",
                      "oil",
                     "cream cheese",
                     "flour",
                 "sugar",
              ],
              price: 8,
              rating: 5
       }
    )
    
    return (
        <>
        <h3>Cakes</h3>
        <Cakes title={"Delicious"} cakeName={victoriaSponge.cakeName} ingredients={victoriaSponge.ingredients} price={victoriaSponge.price} rating={victoriaSponge.rating}/>
        <Cakes title={"Yummy"} cakeName={teaLoaf.cakeName} ingredients={teaLoaf.ingredients} price={teaLoaf.price} rating={teaLoaf.rating}/>
        <Cakes title={"Tasty"} cakeName={carrotCake.cakeName} ingredients={carrotCake.ingredients} price={carrotCake.price} rating={carrotCake.rating}/>

        </>
           
    )    
    
}

export default CakesContainer; 






    

