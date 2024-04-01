import { useRef } from "react"
import { useDrag } from "react-dnd"
import Modal from "./DialogModal/Modal"
// import InputLabel from "./InputLabel"

const Elements = ({ element, binnedItems }) => {

    const modal = useRef()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'element',
        item: { name: element },
        end: (item, moniter) => {
            const dropResult = moniter.getDropResult()
            if (item && dropResult) {
                // alert(`You Threw ${element.name} in ${dropResult.name}`)
                modal.current.open();
                let tempList = binnedItems;
                tempList.push(item.name)
            }
        },
        collect: (moniter) => ({
            isDragging: !!moniter.isDragging(),
        })
    }), [],)

    return (
        <>
            <Modal ref={modal} btnCaption="Close">
                <h2 className="text-xl font-bold text-red-700 my-4">INFO</h2>
                <ul>
                    <li>
                        <label> Enter The Label </label>
                        <br />
                        <input type="text" className="border-2 border-blue-500" />
                    </li>
                    <li>
                        <label> Enter The Palceholder </label>
                        <br />
                        <input type="text" className="border-2 border-blue-500" />
                        {/* <InputLabel/> */}
                    </li>
                </ul>
            </Modal>
            <li ref={drag}>
                {element}
            </li>
        </>

    )
}

export default Elements