import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipies = ({handleCook}) => {
    const [recipes, setRecipes] =useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])
    return (
        <div className=" lg:w-2/3  lg:p-6 rounded-lg lg:*:h-[100px] text-center">
            {/* <h2>Recipes: {recipes.length}</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                recipes.map(recipe =>
                <Recipe  key={recipe.id} 
                recipe={recipe} 
                handleCook={handleCook}>
                </Recipe>)
            }

            </div>
            
            
        </div>
    );
};

export default Recipies;