import { useState } from 'react'
import InputBar from "./components/InputBar"
import ListItem from "./components/ListItem"

export default function App() {
  const [ toDoList, setToDoList ] = useState([])

  function handleAddItem(newItem) {
	if (!newItem.trim()) return
	setToDoList(prev => [newItem, ...prev])
  }

	function handleRemoveItem(index) {
		setToDoList(prev => prev.filter((_,i) => i !== index))
  }

  	function handleEditItem(index, newValue) {
		setToDoList(prev => prev.map((item, i) => (i === index ? newValue : item)))
	}
  return (
    <main className='p-4'>
      <h1 className='text-3xl font-bold text-black mb-4 text-center'>代辦事項</h1>
	  <InputBar onAdd={handleAddItem}/>
	  <ListItem onDelete={handleRemoveItem} list={toDoList} onEdit={handleEditItem} />
    </main>
  )
}
