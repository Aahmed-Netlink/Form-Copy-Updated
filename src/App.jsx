import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import BackDrop from "./Components/BackDrop"
import items from "./Dragable";
import { useState, useEffect } from "react";
import Notes from "./Components/Notes"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [dragable, setDragable] = useState([])
  const [binnedItems, setbinnedItems] = useState([])

  useEffect(() => {
    setDragable(items)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="h-screen my-8 flex gap-4 mx-1">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl text-center">
          <h2
            className="mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans">
            Components
          </h2>
          <ul className='flex flex-col gap-2'>
            {
              dragable.map((item) => <Notes
                key={uuidv4()}
                note={item}
                binnedItems={binnedItems}
              />)
            }
          </ul>
        </aside>
        <BackDrop binnedItems={binnedItems} />
      </main>
    </DndProvider>
  )
}

export default App
