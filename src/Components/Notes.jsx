import { useDrag } from "react-dnd"

const Notes = ({ note,binnedItems }) => {
    
    const [{isDragging},drag] = useDrag(()=>({
        type:'element',
        item:{name:note},
        end:(item, moniter) =>{
            const dropResult = moniter.getDropResult()
            if(item && dropResult)
            {
                // alert(`You Threw ${item.name} in ${dropResult.name}`)
                let tempList = binnedItems;
                tempList.push(item.name)
            }
        },
        collect:(moniter) => ({
            isDragging: !!moniter.isDragging(),
        })
    }),[],)

    return (
        <li ref={drag}>
            {note}
        </li>
    )
}

export default Notes