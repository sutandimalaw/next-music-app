import React, { useEffect, useState } from 'react'
import Image from "next/image";



const CardList = ({search}) => {

  
  const [data, setData] = useState([])
  let replaced = search.replace(/ /g, "+");

  async function getData() {
    const res = await fetch(`https://itunes.apple.com/search?term="${replaced}"&limit=5`); 
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const dataRes = await res.json()
    setData(dataRes.results);
  }

  useEffect(() => {
    getData()
  },[search])

  return (
    <div>
      {data?.map((playlist) => (
        <div className='card'>
        <Image
          src={playlist.artworkUrl100}
          width={100}
          height={100}
          className="object-contain"
        />
        <div className="w-full ml-[10px]">
          <div className="mb-[36px]">
            <div className="text-[10px] tracking-[0.5px] font-semibold colo text-[#5e6165]">{playlist.artistName}</div>
            <div>{playlist.trackName}</div>     
          </div>
          <div className="flex justify-between" >
            <button className="py-[5px] px-[15px] bg-[#10b981] text-[#ffffff] rounded-[20px] text-[10px] tracking-widest font-[500]"> 
              {playlist.primaryGenreName}
            </button>
            <div className="flex">
              <Image
                src="/currency-dollar.png"
                width={16}
                height={16}
                className="object-contain"
              />
              <span className="text-[12px] text-[#f5b014] font-bold my-[auto] mx-[3px]">{playlist.trackPrice}</span>
            </div>              
          </div>        
          </div>
      </div>
      ))}
      
    </div>
  )
}

export default CardList