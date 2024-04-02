import { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import BackDrop from "./Components/BackDrop"
import SideBar from "./Components/SideBar";

import items from "./Components/Dragable";

import Modal from "./Components/DialogModal/Modal";
import InputLabel from "./Components/InformationComponent/InputLabel";
import InputPlaceHolder from "./Components/InformationComponent/InputPlaceHolder";
function App() {

  //* Definging States

  //? State For Draging Objects
  const [dragable, setDragable] = useState([])
  useEffect(() => {
    setDragable(items)
  }, [])

  //? State For Dropping Object
  const [dropable, setDropable] = useState([])

  //? State For Setting Label And Placeholder
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

  //~ Defining Functions

  //~ Function For Saving UserLabel And UserPlaceHolder
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

  //& Consoling The Values For Testing
  console.log(valuestate);

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="h-screen my-8 flex gap-4 mx-1 min-w-[650px]">
        <SideBar dragable={dragable} dropable={dropable} />
        <BackDrop dropable={dropable} ref={modal} />
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