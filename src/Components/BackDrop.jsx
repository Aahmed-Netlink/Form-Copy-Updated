import React, { forwardRef, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import Modal from './DialogModal/Modal'
import InputLabel from './InformationComponent/InputLabel'

const BackDrop = forwardRef(({ binnedItems }, ref) => {
    // const modal = useRef()
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'element',
        // drop: () => ({ name: 'the bin' }),
        drop: () => (ref.current.open()),
        collect: (moniter) => (
            {
                isOver: !!moniter.isOver(),
                canDrop: !!moniter.canDrop(),
            }
        )
    }))

    // if (can) {
    //     modal.current.open()
    // }

    return (
        <>
            {/* <Modal ref={modal} btnCaption="Close">
                <h2 className="text-xl font-bold text-red-700 my-4">INFO</h2>
                <ul>
                    <InputLabel />
                </ul>
            </Modal> */}
            <div className=" text-center w-10/12 rounded-r-xl px-8 py-16 bg-[#008F8C]" ref={drop}>
                <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans'>
                    BackDrop
                </h2>
                <p className="text-stone-200 mb-4 text-3xl">Drag An Element To Get Started<sup className='text-red-600 text-3xl'>*</sup></p>
                <form>
                    <ul className='flex flex-col gap-2 items-center'>
                        {binnedItems.map((item, i) => <li className='list-image-none' key={i}>{item}</li>)}
                    </ul>
                </form>
            </div>
        </>

    )
})

export default BackDrop