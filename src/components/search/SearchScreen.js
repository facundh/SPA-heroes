import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import getHeroByName from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";
import 'animate.css';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const [formValues, handleInputChange, reset] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroByName(q), [q])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate(`?q=${searchText}`)

  };
  return (
    <>
      <h1>Search Screen</h1>
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-dark mt-4 w-100" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          {
            (q === '')
            ? <div className="alert alert-info"> Buscar un heroe </div>
            : (heroesFiltered.length === 0) && <div className="alert alert-danger animate__animated animate__fadeRight">No hay resultados: {q}</div>
          }
            {
              heroesFiltered.map((hero) => (
                <HeroCard
                  key={hero.id}
                  {... hero}
                />
              ))
            }
        </div>
      </div>
    </>
  );
};
