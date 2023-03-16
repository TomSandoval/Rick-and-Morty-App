import { connect, useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import { filterCard, orderCards } from "../../redux/actions";
import style from "./Favorites.module.css";

export default function Favorites(props) {
  const location = useLocation();

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCard(event.target.value));
  };

  const myFavorites = useSelector((state) => state.myFavorites);
  console.log();
  return (
    <div className={style.allContainer}>
      <div className={style.filterContainer}>
        <div className={style.inputContainer}>
            <label>Orden</label>
            <select onChange={handleOrder} className={style.input}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select> 
        </div>
        <div className={style.inputContainer}>
            <label>Genero</label>
            <select onChange={handleFilter} className={style.input}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>  
        </div>

      </div>
      <div className={style.container}>
        {myFavorites.map((char) => {
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
        })}
      </div>
    </div>
  );
}
