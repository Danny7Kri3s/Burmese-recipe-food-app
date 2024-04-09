import React from 'react'
import recipes from '../data/BurmeseRecipes.json'
import ReactPaginate from 'react-paginate'
import defaultImg from '/default.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Home() {

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = recipes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(recipes.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % recipes.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };  

  return (
    <>
      <section className='grid gap-4 md:gap-6 xl:gap-8 md:grid-cols-2 w-[80%] m-auto border-amber-500 py-12 md:py-20 border-y-2 mt-11'>
        {currentItems.map(food => (
          <Link to={`/detail/${food.Guid}`} key={food.Guid}>
          <div className='flex items-center shadow-md p-4 xl:px-8 xl:py-5 rounded-md'>
            <img className='me-4 xl:me-5 w-20 md:w-24 md:h-24 md:rounded-full md:object-cover xl:w-32 xl:h-32' src={'/' + food.Name + '.jpg'} alt={food.Name}
            onError={(e) =>e.target.src = defaultImg} />
            <h3>{food.Name}</h3>
          </div>
          </Link>
        ))}

      
      </section>
      <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={6}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
              containerClassName='page-nav'
              activeClassName='page-nav-active'
              pageLinkClassName='page-num'
              previousLinkClassName='page-num'
              nextLinkClassName='page-num'
            />
    </>
  )
}

export default Home