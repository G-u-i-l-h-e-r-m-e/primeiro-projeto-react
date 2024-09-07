import React, { useState } from 'react'
import "./count.css"

export default function Count() {
  // inicializa o estado com o valor 0
  const [contador, setContador] = useState(0);

  //função para contar o valor do estado

  const aumentar = ()=>{
    setContador(contador + 1);
  }

  const diminuir = ()=>{
    setContador(contador - 1);
  }

  return (
    <div className='count-container'>
      <p>
        {contador}
      </p>
        <button onClick={aumentar} className='btn'>+</button>
        <button onClick={diminuir} className='btn'>-</button>
    </div>
  )
}
