import { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import items from "./Components/Dragable";
import BackDrop from "./Components/BackDrop"
import SideBar from "./Components/SideBar";
import InputLabel from "./Components/InformationComponent/InputLabel";
import Modal from "./Components/DialogModal/Modal";
import InputPlaceHolder from "./Components/InformationComponent/InputPlaceHolder";
function App() {
  //! States

  const [dragable, setDragable] = useState([])
  useEffect(() => {
    setDragable(items)
  }, [])

  const [binnedItems, setbinnedItems] = useState([])

  const [valuestate, setvaluestate] = useState([
    {
      placeholder: [],
      label: [],
    }
  ])

  //~ Defining Refrence 
  const modal = useRef()
  const userLabel = useRef();
  const userPlaceHolder = useRef();

  const handleSave = () => {
    const enteredLabel = userLabel.current.value
    const enteredPlaceHolder = userPlaceHolder.current.value

    setvaluestate(
      () => {
        return {
          label: [enteredLabel],
          placeholder: [enteredPlaceHolder]
        }
      }
    )
  }

  console.log(valuestate);

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="h-screen my-8 flex gap-4 mx-1 min-w-[650px]">
        <SideBar dragable={dragable} binnedItems={binnedItems} />
        <BackDrop binnedItems={binnedItems} ref={modal} />
      </main>
      <Modal ref={modal} btnCaption="Close" handleSave={handleSave}>
        <h2 className="text-xl font-bold text-red-700 my-4">INFO</h2>
        <ul>
          <InputLabel ref={userLabel} />
          <InputPlaceHolder ref={userPlaceHolder} />
        </ul>
      </Modal>
    </DndProvider>
  )
}

export default App
