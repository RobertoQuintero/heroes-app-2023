import { Link } from "react-router-dom"

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const heroImageUrl =`/assets/heroes/${id}.jpg`

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroImageUrl} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <div className="card-title">{superhero}</div>
              <div className="card-text">{alter_ego}</div>
              {
                 (alter_ego!==characters)&& <p>{characters}</p>
              }

              <div className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </div>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
