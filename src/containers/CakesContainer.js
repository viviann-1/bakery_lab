import { useState } from "react";

const CakesContainer = () =>{
    //const cake1 = ("Victoria Sponge", ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"], "5", "5");

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
   }
   
   )
    //const cake3 = ("Carrot Cake", ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"], "8", "5");

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
           <h3>Cakes</h3>

    )

        
    
}

export default CakesContainer; 






    

