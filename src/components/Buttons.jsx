import React from 'react'

const Buttons = ({val,click}) => {
  return (
      <div className='btn-row'>
          {
              val.map((item,index)=>{
                  return <input type="button" value={item} key={index} onClick={()=>click(item)} />
              })
          }
    </div>
  )
}

export default Buttons