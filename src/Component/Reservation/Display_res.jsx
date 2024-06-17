/*import React, { useState } from 'react'

const Display_res = () => {
const[formName,setFormName]= useState({
  Name:'',
  Date:'',
})


const handleChange=(e)=>{
const{Name,value}= e.target;
setFormName((prevValue)=>({
  ...prevValue, 
  [Name]:value
}))

}


const onSubmit=(e)=>{
e.preventDefault()
alert(`The table is reserved for ${formName.Name} and in ${formName.Date}` )
}


  return (
    <div className='main-dis'>
      <form >
<label>
    <input type="text" value={formName.text} name='text'  required  />
</label>



      </form>
    </div>
  )
}

export default Display_res*/
