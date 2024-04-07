import React from 'react'
import AddForm from './AddForm'

const formaEnb =()=>{
  document.querySelector(".addAnimal_form_back").style.display="flex"
  // document.querySelector('.App').append(<AddForm/>)
}

const FillForm = ({handlePage}) => { 

  return (
    <div>
        <button type="button" onClick={formaEnb}>add</button>
        <AddForm handlePage={handlePage}/>
    </div>
  )
}

export default FillForm
export {formaEnb}