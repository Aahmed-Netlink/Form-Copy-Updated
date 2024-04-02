import { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import items from "./Components/Dragable";
import BackDrop from "./Components/BackDrop"
import SideBar from "./Components/SideBar";
import InputLabel from "./Components/InputLabel";
function App() {
  //! States

  const [dragable, setDragable] = useState([])
  useEffect(() => {
    setDragable(items)
  }, [])

  const [binnedItems, setbinnedItems] = useState([])

  // const [valuestate, setvaluestate] = useState([
  //   {
  //     placeholder: [],
  //     label: [],
  //   }
  // ])

  // const userLabel = useRef();

  // const handleSave = () => {
  //   setvaluestate(
  //     () => {
  //       return {
  //         placeholder: [userLabel.current.value],
  //       }
  //     }
  //   )
  // }

  //~ Consoling values for checking

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="h-screen my-8 flex gap-4 mx-1 min-w-[650px]">
        <SideBar dragable={dragable} binnedItems={binnedItems} />
        <BackDrop binnedItems={binnedItems} />
      </main>
      <div>
        <InputLabel />
      </div>
    </DndProvider>
  )
}

export default App
