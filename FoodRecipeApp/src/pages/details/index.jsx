import {React, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import { useContext } from 'react'
import { GlobalContext } from '../../contexts'

const Details = () => {

const params = useParams()

const { recipeDetails, setRecipeDetails, addToFavorites, favorites } = useContext(GlobalContext)

useEffect(() => {
    async function getRecipeDetails(){
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
        const data = await res.json()

        if(data?.data) {
            setRecipeDetails(data?.data)
        }
    }

    getRecipeDetails()
}, [])

    console.log(favorites)


  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6 sm:px-12">
        {
            recipeDetails?.recipe ? (
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    
                    {/* Left Column: Sticky Image */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-12">
                        <img 
                            src={recipeDetails?.recipe?.image_url} 
                            alt={recipeDetails?.recipe?.title} 
                            className="w-full h-[400px] lg:h-[700px] object-cover rounded-3xl shadow-md"
                        />
                    </div>

                    {/* Right Column: Recipe Details */}
                    <div className="w-full lg:w-1/2 flex flex-col py-4">
                        
{/* Header Section */}
<div className="mb-8">
    <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">
            {recipeDetails?.recipe?.publisher}
        </span>
        
        {/* Favorite Button */}
        <button 
            onClick={() => addToFavorites(recipeDetails?.recipe)}
            className="p-2 rounded-full hover:bg-stone-200 transition-colors duration-200 focus:outline-none"
            aria-label="Add to favorites"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg"  
                className={`h-8 w-8 transition-colors duration-200 ${
                    favorites.includes(recipeDetails?.recipe)
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'fill-none text-stone-400 hover:text-yellow-400'
                }`}
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                />
            </svg>
        </button>
    </div>

    <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 mt-3 leading-tight tracking-tight">
        {recipeDetails?.recipe?.title}
    </h1>
</div>

                        {/* Meta Data (Time & Servings) */}
                        <div className="flex items-center gap-8 text-stone-600 border-y border-stone-200 py-5 mb-10">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-lg font-medium">{recipeDetails?.recipe?.cooking_time} Minutes</span>
                            </div>
                            <div className="w-px h-8 bg-stone-300"></div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-lg font-medium">{recipeDetails?.recipe?.servings} Servings</span>
                            </div>
                        </div>

                        {/* Ingredients Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-stone-900 mb-6">Ingredients</h2>
                            <ul className="flex flex-col gap-4">
                                {recipeDetails?.recipe?.ingredients?.map((ingredient, index) => (
                                    <li key={index} className="flex items-start gap-4 text-lg text-stone-700 leading-relaxed">
                                        <span className="flex-shrink-0 mt-2.5 w-2 h-2 rounded-full bg-amber-500"></span>
                                        <p>
                                            <span className="font-bold text-stone-900">
                                                {ingredient?.quantity} {ingredient?.unit}
                                            </span>
                                            {ingredient?.quantity || ingredient?.unit ? ' ' : ''}
                                            {ingredient?.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Call to Action Button */}
                        <div>
                            <a 
                                href={recipeDetails?.recipe?.source_url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-stone-900 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-stone-700 transition-all duration-200"
                            >
                                Get Detailed Directions
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-[80vh]">
                    <div className="flex flex-col items-center gap-4 text-stone-500">
                        <svg className="animate-spin h-10 w-10 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-2xl font-medium tracking-wide">Loading recipe...</span>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Details