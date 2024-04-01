import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import BackDrop from "./Components/BackDrop"
import { useState } from "react";
import SideBar from "./Components/SideBar";

function App() {
  const [value,setvalue] = useState([
    {
      placeholder: [],
      label: [],
    }
  ])
  const [binnedItems, setbinnedItems] = useState([])
  console.log("I am In App Jsx File" + binnedItems)
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="h-screen my-8 flex gap-4 mx-1">
        <SideBar binnedItems={binnedItems} />
        <BackDrop binnedItems={binnedItems} />
      </main>
    </DndProvider>
  )
}

export default App
