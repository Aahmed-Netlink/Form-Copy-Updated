import { v4 as uuidv4 } from 'uuid';
import Elements from './Elements';

//& Component For Displaying Side Component
const SideBar = ({ dragable, dropable }) => {

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl text-center">
            <h2
                className="mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans">
                Components
            </h2>
            <ul className='flex flex-col gap-2'>
                {
                    dragable.map((item) =>
                        // * Passing Items To Element Component For Making Them 
                        <Elements
                            key={uuidv4()}
                            item={item}
                            dropable={dropable}
                        />)
                }
            </ul>
        </aside>
    )
}

export default SideBar
