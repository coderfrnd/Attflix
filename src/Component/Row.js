import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { MdChevronLeft,MdChevronRight} from 'react-icons/md';

import Movie from './Movie';

function Row({ title, fetchURL,rowID }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((e) => {
      setmovies(e.data.results);
    });
  }, [fetchURL]);
  console.log(movies);
  const slideleft = ()=>{
    var slider=document.getElementById('slider'+rowID);
    slider.scrollLeft=slider.scrollLeft+500;
  }
  const slideRight = ()=>{
    var slider=document.getElementById('slider'+rowID);
    slider.scrollLeft=slider.scrollLeft+500;
    // slider.scr
  }
  return (

    <>
      <h2 className='text-white font-bold md:text-xl p-4'>
        {title}
      </h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideleft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((it, id) => (
            <Movie key={id} it={it} />
          ))}

        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block' />
      </div>

    </>
  );
}

export default Row