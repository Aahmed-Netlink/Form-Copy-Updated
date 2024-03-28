import React from 'react'
import { useDrag } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';

const SideBar = ({ dragable, binnedItems }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'element',
        item: { name: dragable },
        end:(item, moniter) =>{
            const dropResult = moniter.getDropResult()
            if(item && dropResult)
            {
                // alert(`You Threw ${item.name} in ${dropResult.name}`)
                let tempList = binnedItems;
                tempList.push(item.name)
            }
        },
        collect: (moniter) => (
            {
                isDragging: !!moniter.isDragging(),
            }
        )
    })
    )
    console.log(dragable);
    return (
        <aside
            className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl text-center">
            <h2
                className="mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans">
                Components
            </h2>
            <ul
                className='flex flex-col gap-2'>
                {/* {
                    dragable.map((element) => {
                        return <li key={uuidv4()}
                            ref={drag}
                            style={{ border: isDragging ? "5px solid pink" : '0px' }}
                        >
                            {element}
                        </li>
                    })
                } */}
                {dragable.map((elemet) => <li key={uuidv4()} ref={drag}>
                    {elemet}
                </li>)}

            </ul>
        </aside>
    )
}

export default SideBar
