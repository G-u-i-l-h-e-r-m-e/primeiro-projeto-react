import React from 'react'
import "./imgCard.css"

//importa a imagem diretamente
import img1 from "../../assets/img/img-card.jpg"

export default function ImgCard({caption}) {
  return (
    <div className='image-card'>
        <img src={img1} alt={caption || "Imagem"}  className='image-card-img'/>
        <p className='image-card-caption'>{caption || "Imagem interessante"}</p>
    </div>
  )
}
