import React from 'react'
import { Link } from 'react-router-dom'

const RecipeItem = ({ item }) => {
  const recipeId = item?.id

  return (
<div className="group flex flex-col w-80 overflow-hidden p-5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 gap-5 border border-stone-100 rounded-3xl">
    <div className="h-48 flex justify-center overflow-hidden items-center rounded-2xl bg-stone-100">
        <img 
            src={item?.image_url} 
            alt="recipe item" 
            className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
    </div>
    <div className="flex flex-col flex-1">
        <span className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-1"> 
            {item?.publisher}
        </span>
        <h3 className="text-xl truncate font-extrabold text-stone-900 mb-4">
            {item?.title}
        </h3>
        {recipeId ? (
            <Link 
                to={`/item/${recipeId}`} 
                className="mt-auto inline-block text-center bg-stone-900 text-white px-5 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-stone-700 transition-colors duration-300 shadow-sm"
            >
                View Recipe
            </Link>
        ) : null}
    </div>
</div>
  )
}

export default RecipeItem