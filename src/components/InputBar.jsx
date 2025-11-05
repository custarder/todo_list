import { useState } from 'react'

export default function InputBar({onAdd}) {
	const [inputValue, setInputValue] = useState('')

	function handleAdd() {
		if (!inputValue.trim()) return
		onAdd(inputValue)
		setInputValue('')
	}

	return (
		<div className='flex gap-2'>
			<input className='input input-bordered flex-1' placeholder='輸入新的待辦事項' type='text' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
			<button className='btn btn-neutral' onClick={handleAdd}>確定</button>
		</div>
	)
}