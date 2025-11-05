import { useState, useRef, useEffect } from 'react'

export default function ListItem({list, onDelete, onEdit}) {
	const [editingIndex, setEditingIndex] = useState(null)
	const [editValue, setEditValue] = useState('')
	const inputRef = useRef(null)

	useEffect(() => {
		if (editingIndex !== null && inputRef.current) {
			inputRef.current.focus()
		}
	}, [editingIndex])

	function handleSave() {
		onEdit(editingIndex, editValue)
		setEditingIndex(null)
		setEditValue('')
	}


	if (list.length === 0) {
		return <p className='text-bold text-red-800 mt-4'>目前沒有待辦事項</p>
	}
	return (
		<ul className='mt-4 space-y-2'>
			{list.map((item, index) => (
			<li className='flex gap-2 items-center' key={index}>
				{editingIndex === index ? (
					<form onSubmit={(e) => {e.preventDefault();handleSave()}} className='flex gap-2 items-center w-full'>
						<input ref={inputRef} className='input input-bordered flex-1' type='text' value={editValue} onChange={(e) =>setEditValue(e.target.value)}/>
						<button type="submit" className='flex-none btn btn-success'>儲存</button>
						<button type="button" onClick={() => setEditingIndex(null)}className='flex-none btn btn-warning '>取消</button>
					</form>
				) : (
					<>
						<p className='flex-1 p-2 bg-amber-50'>{item}</p>
						<button onClick={() => {setEditingIndex(index); setEditValue(item)}} className='btn btn-info'>編輯</button>
						<button onClick={() => onDelete(index)} className='btn btn-warning flex-none'>刪除</button>
					</>
				)}
			</li>))}
		</ul>
	)
}