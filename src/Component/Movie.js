import React,{  useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { db } from '../Firebase'
import { doc,arrayUnion,updateDoc } from 'firebase/firestore'
import { UserAuth } from '../Context/Authcontext'

const Movie = ({it}) => {
    const [like, setlike] = useState(false)
     const{user}=UserAuth()
     const [saved, setsaved] = useState(false)
     const movieID=doc(db,'users',`${user?.email}`)
     const saveshow=async()=>{
      if(user?.email){
        setlike(!like)
        setsaved(true)
        await updateDoc(movieID,{
          savedshows:arrayUnion({
            id:it.id,
            title:it.title,
            img:it.backdrop_path
          })
        })
      }
      else{
        alert('Plz log in for save movies')
      }
     }
  return (
    <>
   <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${it?.backdrop_path}`} alt={it?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{it.title}</p>
<p onClick={saveshow}>{like?<FaHeart className='absolute top-4 left-4 text-gray-300' /> :<FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
        </div>
        </div>
       
    </>
  )
}

export default Movie