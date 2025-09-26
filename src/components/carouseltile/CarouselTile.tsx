import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    tileLink?: string;
    name: string;
    imgLink: string;
}

const CarouselTile = ({ imgLink, name, tileLink } : Props) => {
  return (
            <Link href={tileLink || '#'}>
          <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
            <Image
              className="shadow-xl"
              src={imgLink}
              alt={name}
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-1xl font-bold text-primary">
              {name}
            </h3>
          </div>
        </Link>
  )
}

export default CarouselTile