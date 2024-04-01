import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

const BackDrop = ({ binnedItems }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'element',
        drop: () => ({ name: 'the bin' }),
        collect: (moniter) => (
            {
                isOver: !!moniter.isOver(),
            }
        )
    }))


    return (
        <div className=" text-center w-10/12 rounded-r-xl px-8 py-16 bg-[#008F8C]" ref={drop}>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans'>
                BackDrop
            </h2>
            <p className="text-stone-200 mb-4 text-3xl">Drag An Element To Get Started<sup className='text-red-600 text-3xl'>*</sup></p>
            <ul className='flex flex-col gap-2 items-center'>
                {binnedItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}

export default BackDrop