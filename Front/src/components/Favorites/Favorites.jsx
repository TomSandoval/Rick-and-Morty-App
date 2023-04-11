import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import { filterCard, orderCards } from "../../redux/actions";
import { getFavorites } from "../../redux/actions";
import style from "./Favorites.module.css";
import { useEffect } from "react";

export default function Favorites(props) {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  

  useEffect(()=>{
    dispatch(getFavorites())
  }, [])

  const location = useLocation();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCard(event.target.value));
  };

  return (
    <div className={style.allContainer}>
      <div className={style.filterContainer}>
        <div className={style.inputContainer}>
          <label>Orden por ID</label>
          <select onChange={handleOrder} className={style.input}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <label>Orden por genero</label>
          <select onChange={handleFilter} className={style.input}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <div className={style.container}>
        {favorites.map((char) => {
          if (char.id) {
            return (
              <Card
                id={char.id}
                key={char.id}
                name={char.name}
                species={char.species}
                gender={char.gender}
                image={char.image}
                location={location}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
