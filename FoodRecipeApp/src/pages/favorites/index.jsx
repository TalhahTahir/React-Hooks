import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts'
import RecipeItem from '../../components/RecipeItem';

const Favorites = () => {
      const { favorites } = useContext(GlobalContext);

  return (
    <div className='container mx-auto py-8 flex flex-wrap gap-5 justify-center'>

        {
            favorites && favorites.length > 0 
            ? favorites.map((item, index) => <RecipeItem item={item} key={index} />)
            : <div className='text-center text-2xl text-white'>No favorites found</div>
        }
        
    </div>
  )
}

export default Favorites