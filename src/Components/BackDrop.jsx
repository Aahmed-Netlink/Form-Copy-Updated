import { forwardRef } from 'react'
import { useDrop } from 'react-dnd'
//? Component For Making A Dropalbe Area For Dragable Items
const BackDrop = forwardRef(({ dropable }, ref) => {

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'element',
        drop: () => (ref.current.open()),
        // hover: (item, monitor) => {
        //     console.log(item)
        // },
        collect: (moniter) => (
            {
                isOver: !!moniter.isOver(),
                canDrop: !!moniter.canDrop(),
            }
        )
    }))


    return (
        <>
            <div className=" text-center w-10/12 rounded-xl px-8 py-16 bg-stone-400 border-stone-600 border-2 overflow-scroll no-scrollbar" ref={drop}>
                <h2 className='mb-8 font-bold uppercase md:text-xl font-sans'>
                    BackDrop
                </h2>
                {dropable.length == 0 ? <p className=" mb-4 text-3xl">Drag An Element To Get Started<sup className='text-red-600 text-3xl'>*</sup></p> : ""}
                <form>
                    <ul className='flex flex-col gap-2 items-center'>
                        {dropable.map((item, i) => (
                            <ul key={i} className=' inline-flex '>
                                <label className='whitespace-pre text-xl font-semibold capitalize text-slate-900'>
                                    {item.componentLabel}{"  "}
                                </label>
                                {
                                    item.componentType === "input" ? <input placeholder={item.placeholder} /> :
                                        item.componentType === "button" ? <button className='bg-blue-500 rounded-lg py-2 px-6 font-bold capitalize'>{item.placeholder}</button> :
                                            item.componentType === "textarea" ? <textarea placeholder={item.placeholder}></textarea> : ""
                                }
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