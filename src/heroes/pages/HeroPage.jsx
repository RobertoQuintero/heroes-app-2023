import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {

  const {id}= useParams()
  const hero = useMemo(()=>getHeroById(id),[id])
  const navigate= useNavigate()

  const onNavigateBack=()=>{
    navigate(-1)
  }

  if(!hero){
    return <Navigate to='/marvel'/>
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3 aria-label='name'>{hero.superhero}</h3>
        <ul className='list-goup list-goup-flush'>
          <li className="list-goup-item">
            <b>Alter ego: </b>{hero.alter_ego}
          </li>
          <li className="list-goup-item">
            <b>Publisher: </b>{hero.publisher}
          </li>
          <li className="list-goup-item">
            <b>First Appearance: </b>{hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button aria-label='back' className="btn btn-outline-primary"
        onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>

    </div>
  )
}
