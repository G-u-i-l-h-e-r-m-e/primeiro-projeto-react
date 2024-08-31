import React from 'react'
import "./button.css"

export default function Button({text,onClickProp}) {
  return (
    <button className='btn-style' onClick={onClickProp}>
        {text}
    </button>
  )
}

