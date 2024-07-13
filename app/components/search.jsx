import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Search = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
            src="/logo.png"
            width={72.2}
            height={83.8}
            className="image-section"
          />
      </div>
      <div>
        <Link href={"result"}>
          <button className="Rectangle"> Artis / Album / Title</button>
        </Link>
        <button className="Rectangle-Search"> <span className="Search">Search</span></button>
      </div>
    </div>
  )
}

export default Search