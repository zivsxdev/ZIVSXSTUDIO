import {useUser} from '@clerk/clerk-react'
import React, { useEffect, useState} from 'react'
import { dummyPublishedCreationData} from '../assets/assets'
import { Heart } from "lucide-react";




const Community = () => {

  const [creations, setCreations] = useState([])
  const {user} = useUser()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCreaions = async ()=>{
    setCreations(dummyPublishedCreationData)
  }

  useEffect(()=>{
    if(user){
      fetchCreaions()
    }

  },[fetchCreaions, user])
  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      Creations
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        {creations.map((creation, index) => (
          <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w1/2 lg:max-w-1/3'>
            <img src={"creation.content"} alt="" className='w-full h-full object-cover rounded-lg' />
      
            <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end jstify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-tramsparent to-black/80 text-white rounded-lg'>
              <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
              <div className='flex gap item-center'>
                <p>{creation.likes.length}</p>
                <Heart className={`min-w-5 h-5 hover:scale-110 cursor-pointer $ {creation.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-white'}`} />
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}

export default Community