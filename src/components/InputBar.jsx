import { useState } from 'react'

export default function InputBar({onAdd}) {
	const [inputValue, setInputValue] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		if (!inputValue.trim()) return
		onAdd(inputValue)
		setInputValue('')
	}

	return (
		<form onSubmit={handleSubmit} className='flex gap-2'>
			<input className='input input-bordered flex-1' placeholder='輸入新的待辦事項' type='text' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
			<button className='btn btn-neutral' type='submit'>確定</button>
		</form>
	)
}