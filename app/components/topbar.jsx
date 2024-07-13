import React from 'react'
import Image from "next/image";

 const Topbar = ({setModal}) => {
  return (
    <div className="bar top-0 flex justify-center" >
        <Image
          src="/menu.png"
          width={14}
          height={11.4}
          className="object-contain"
        />
        <Image
          src="/ngmusic.png"
          width={72.2}
          height={15.8}
          className='ngmusic '
        />
        <Image
          src="/search.png"
          width={14}
          height={14}
          className='search'
          onClick={()=>setModal(true)}
        />     
    </div>
  ) 
}

export default Topbar

