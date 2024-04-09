import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <header className='p-4 bg-amber-600 text-center'>
      
      <Link to={"/"}>
        <h1 className='p-4 flex items-center justify-center md:justify-start'><GiKnifeFork className='inline text-4xl text-white font-extrabold text-center' /><span className='text-white font-lobster text-xl md:text-3xl text-center'>Burmese Recipes</span>
        </h1>
      </Link>

    </header>
  )
}

export default Nav