import React from 'react'
import { useState } from 'react'
import Log from './Log'
import calculate from '../utilities/calculate'
const Calculator = () => {
    const btnList = [['7', '8', '9', '+'], ['4', '5', '6', '-'], ['1', '2', '3', '*'], ['0', '.', ',', '/'], ['[', ']', '=', '%']]
    const [isVisible, setVisible] = useState(true)
    
    const [text, setText] = useState('')
    const updateText = (btnValue) => {
        setText(text+btnValue)
    }
    const [log, setLog] = useState([])
    const updateToggle = (exp) => {
        setLog([exp,...log])
    }

    const calculateResult = (inputExp) => {
        const result = calculate(inputExp)
        const exp = {
            exp: inputExp,
            res: result
        }
        setText(exp.res)
        updateToggle(exp)
    }
    return (
      <>
      <div className={isVisible?'calculator':'calculator-hide'}>
          <div className='text-area'>
              <input type="text" className='input-field' value={text} onKeyUp={(event) => {isNaN(event.key)?alert(`Invalid character: ${event.key}\nFor Arthimatic Operations use Buttons`):updateText(event.key)}} />
          <input type="button" className='clear-btn' value='C' onClick={()=>setText('')}/>
          <input type="button" className='clear-btn add-log' value='M' onClick={()=>setVisible(false)}/>
          </div>
          {
              btnList.map((li,i) => {
                  return <div className="btn-row" key={i}>
                      {
                          li.map((item,index) => {
                              return <input type='button' value={item} onClick={(event) => event.target.value!=='='?updateText(event.target.value):calculateResult(text)} key={index} />
                          })
                    }
                  </div>
            })
          }
            </div>
            <Log value={log} isVisible={isVisible} setVisiblity={setVisible} />
            </>
  )
}

export default Calculator