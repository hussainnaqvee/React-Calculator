import React from 'react'
import { useState } from 'react'

const Log = ({ value, isVisible, setVisiblity }) => {
    var result = value.map((item,index) => {
        return `---Cal-${index+1}---\nExp: ${item.exp}\nResult: ${item.res}\n`
    })
    
  return (
      <div className={isVisible?"cal-log":"cal-log cal-log-show"}>
            <input type="button" className="clear-btn" value="X" onClick={()=>setVisiblity(true)}/>
          <textarea className="log" value={result}>
            </textarea>
        </div>
  )
}

export default Log