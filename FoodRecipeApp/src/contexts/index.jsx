import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event){

        event.preventDefault();
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

            const data = await res.json();

            if(data?.data?.recipes){
                setRecipes(data?.data?.recipes);
                setLoading(false);
                setSearchParam("");
                navigate("/");
            }

            console.log(data);
        }
        catch(error){
            console.log(error);
            setLoading(false);
            setSearchParam("");
        }
    }

    function addToFavorites(recipe) {
        let copyFavorites = [...favorites];
        const index = copyFavorites.findIndex((fav) => fav.id === recipe.id);
        if (index === -1) {
            copyFavorites.push(recipe);
        } else {
            copyFavorites.splice(index, 1);
        }

        setFavorites(copyFavorites);
    }




    return <GlobalContext.Provider value={{ searchParam, recipes, loading, setSearchParam, handleSubmit, recipeDetails, setRecipeDetails, addToFavorites, favorites }}>{children}</GlobalContext.Provider>
}