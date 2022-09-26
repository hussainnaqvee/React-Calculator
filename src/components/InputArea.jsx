import React, {useState} from 'react'
const InputArea = () => {
    const [text, setText] = useState('')
    const addText = () => {
        document.addEventListener('keydown', function (event) { 
            setText(text+event.key);
        })
    }
  return (
      <div className='text-area'>
          <input type="text" className='input-field' value={text} onChange={()=>addText()} />
          <input type="button" className='clear-btn' value='C' onClick={()=>setText('')}/>
          <input type="button" className='clear-btn add-log' value='M'/>
    </div>
  )
}

export default InputArea