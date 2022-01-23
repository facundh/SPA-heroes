import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroesById";

import 'animate.css'


export const HeroScreen = () => {

  // Asi es como lo pasamos a la ruta, el id es como esta detallado el params en la ruta y esta desestrcutrado de params
  const {heroeId} = useParams();
  const navigate = useNavigate();
  
  const hero = useMemo( () => getHeroById(heroeId), [heroeId] ) ;


  // Su el usuario pone un url que no existe lo devuelo a la pagina que yo le indico
  if(!hero) return <Navigate to='/'/>

  // Desestructuracion de mi hero
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  // Imagen
  const imagePath = `/assets/${id}.jpg`

  const handleReturn = () => {
        navigate(-1)
  }
  
  return (
  <div className="row mt-5">

    <div className="col-4 animate__animated animate__fadeInLeft ">
      <img  
      src={imagePath}
      alt={hero.superhero}
      className="img-thumbnail"
      />
    </div>

    <div className="col-8 animate__animated animate__fadeInRight ">

        <h3>
            {superhero}
        </h3>

        <ul className="list-group list-group">
              <li className="list-group-item">
                <b>Alter Ego:</b> {alter_ego}
              </li>
              <li className="list-group-item">
                <b>Publisher: </b> {publisher}
              </li>
              <li className="list-group-item">
                <b>First Appearance: </b> {first_appearance}
              </li>
        </ul>

        <h4 className=" mt-3">Characters</h4>
        <p>{characters}</p>

        <button className="btn btn-outline-primary w-100"
        onClick={handleReturn}>
            Go Back...
        </button>
    </div>
        
  </div>
  );
};
