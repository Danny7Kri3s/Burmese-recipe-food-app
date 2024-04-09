import React from 'react'
import { Link, useParams } from 'react-router-dom'
import recipes from '../data/BurmeseRecipes.json'
import users from '../data/UserTypes.json'
import defaultImg from '/default.png'


function Detail() {

  const {id} = useParams()
  const recipeInfo = recipes.find(food => food.Guid === id);
  const userType = users.find(user => user.UserCode === recipeInfo.UserType);

  console.log(userType)
  return (
    <section className='w-[80%] m-auto'>
      <div className='w-full text-end'>
        <Link to={'/'}>
          <button className='btn'>Back</button>
        </Link>
      </div>

      <div className='flex flex-wrap justify-center items-start h-auto gap-5 md:gap-20  '>  
        
          <img
            className=' object-cover max-w-full lg:max-w-[30%] h-60 md:h-80 mx-3 rounded-xl shadow-xl'
          src={`/${recipeInfo.Name}.jpg`}
          alt={`${recipeInfo.Name}`} 
          onError={(e) => e.target.src = defaultImg}
          />

        <div className='p-5 w-[100%]  text-center lg:w-[50%] md:w-[60%] lg:text-start'>
          <h1 className='font-bold text-xl xl:text-3xl md:text-2xl my-8 md:my-10 text-brown-tt'>{recipeInfo.Name}</h1>

          <p className='md:text-2xl my-5 md:my-8'> 
            <span className='block font-lobster text-2xl md:text-3xl text-brown-tt'>For:</span>
            {userType.UserMMType} 
            <span className='font-lobster text-brown-tt'> Or </span> 
            <span className='font-lobster text-gray-tp'>{userType.UserEngType}</span>
          </p>

          <hr/>

          <p className='my-7 md:my-10'>
            <span className='block font-lobster text-2xl md:text-3xl text-brown-tt'>Ingredients:</span>
            <span className='block pt-5 md:pt-7 text-gray-tp'>{recipeInfo.Ingredients}</span>
          </p>

          <hr />

          <p className='my-7 md:my-10'>
            <span className='block font-lobster text-2xl md:text-3xl text-brown-tt'>How To Cook?</span>
            <span className='block pt-5 md:pt-7 text-gray-tp'>{recipeInfo.CookingInstructions}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Detail