import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts'
import RecipeItem from '../../components/RecipeItem';

const Home = () => {

    const { recipes, loading } = useContext(GlobalContext);

    if(loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                Loading...
            </div>
        )
    }

  return (
    <div className='container mx-auto py-8 flex flex-wrap gap-5 justify-center'>

        {
            recipes && recipes.length > 0 
            ? recipes.map((item, index) => <RecipeItem item={item} key={index} />)
            : <div className='text-center text-stone-600 text-2xl'>Search for recipes</div>
        }
        
    </div>
  )
}

export default Home