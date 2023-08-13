import Image from "next/image";
import React from "react";
import Title from "../../../Typography/Title";
import Chip from '../../common/Chip';


import placeholder from "../../../resources/images/placeholder.jpg";

export default function Tile({ imageSrc, imageAlt, name, description, category }) {
  return (
    <>
      <div className="flex flex-col w-80 justify-around gap-5 py-3 border items-center bg-gray-950 p-3 border-gray-800 rounded">
        <Image
          className="rounded-md mt-3"
          quality={100}
          src={placeholder}
          alt={imageAlt}
          height={200}
          width={250}
        />
        <div className="flex flex-col gap-2">
          <div className="tile-top-bar my-2">
            <div className="chips-container flex gap-2">
              {category.map((category) => {
                  return(<Chip key={category}>{category}</Chip>)
                })
              }
            </div>
          </div>
          <Title primitive={"h2"} className="text-3xl font-bold">{name}</Title>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
