import { forwardRef } from 'react'
import { useDrop } from 'react-dnd'

//? Component For Making A Dropalbe Area For Dragable Items
const BackDrop = forwardRef(({ dropable }, ref) => {

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'element',
        drop: () => (ref.current.open()),
        collect: (moniter) => (
            {
                isOver: !!moniter.isOver(),
                canDrop: !!moniter.canDrop(),
            }
        )
    }))
    return (
        <>
            <div className=" text-center w-10/12 rounded-r-xl px-8 py-16 bg-[#008F8C] overflow-scroll" ref={drop}>
                <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans'>
                    BackDrop
                </h2>
                <p className="text-stone-200 mb-4 text-3xl">Drag An Element To Get Started<sup className='text-red-600 text-3xl'>*</sup></p>
                <form>
                    <ul className='flex flex-col gap-2 items-center'>
                        {dropable.itemList.map((item ,i) => (
                            <ul key={i} className=' inline-flex '>
                                <label className='whitespace-pre text-xl font-semibold capitalize text-slate-900'>
                                    {dropable.label[i]}{"  "}
                                </label>
                                <>{item}</>
                            </ul>
                        ))
                        }
                    </ul>
                </form>
            </div>
        </>

    )
})

export default BackDrop