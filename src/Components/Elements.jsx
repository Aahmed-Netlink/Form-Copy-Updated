import { useDrag } from "react-dnd"

//& Component Making Items Dragable And Dropable
const Elements = ({ item, dropable }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'element',
        item: { name: item },
        end: (item, moniter) => {
            const dropResult = moniter.getDropResult()
            if (item && dropResult) {
                let tempList = dropable;
                tempList.push(item.name)
            }
        },
        collect: (moniter) => ({
            isDragging: !!moniter.isDragging(),
        })
    }), [],)

    return (
        <>
            <li ref={drag}>
                {item}
            </li>
        </>
    )
}

export default Elements