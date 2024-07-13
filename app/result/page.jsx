"use client"; 
import React, { useState } from 'react'
import Topbar  from '../components/topbar'
import "./styles.css";
import CardList from '../components/cardList';
import Link from 'next/link'

const Page = () => {
  const [search, setSearch] = useState("");
  const [key, setKey] = useState("")
  const [modal, setModal] = useState(false)

  return (
    <div className="h-screen">
      <div className="m-auto  container">
        <Topbar setModal={setModal}/>
        <div className="flex justify-center">
          <div>{ search? "search result for" :"" }</div>
          <div className="style-search">{search}</div>
        </div>
        <CardList search={search} />
      </div>
      { modal?
        <div className="fixed left-0 top-0 w-full h-full bg-[#1c1c2dcc]"  >
          <div className="grid justify-center mt-[35vh]">
            <input placeholder='search' type="text" value={key} className="mb-[15px] p-[5px] text-center rounded-2xl" onChange={(e) =>setKey(e.target.value)}/>
            <Link href={"result"}>
              <button className="Rectangle"> Artis / Album / Title</button>
            </Link>
            <button 
              className="Rectangle-Search" 
              onClick={()=> {
                setSearch(key)
                setModal(false)
              }}> 
                <span className="Search">Search</span>
            </button>
          </div>
        </div>
        : ""
      }    
    </div>   
  )
}

export default Page
