import React from 'react';
import Chip from '../../common/Chip';

export default function Filter() {
    const categories = ["city", "adventure", "country side"];
  return (
    <section className='py-4 my-4'>
        <div id="categories-container" className='flex gap-2'>
           {categories.map((category) => {
            return(
                <Chip key={category}>{category}</Chip>
            )
            })}
        </div>
    </section>
  )
}
