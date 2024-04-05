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
            opacity: moniter.isDragging() ? 0 : 1,
            isDragging: !!moniter.getItem(),
        })
    }), [],)

    console.log(dropable)

    return (
        <>
            <li ref={drag}>
                {
                    item.componentType
                }
            </li>
        </>
    )
}

export default Elements