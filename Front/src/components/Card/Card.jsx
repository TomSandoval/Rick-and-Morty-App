import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { getFavorites, removeCharacter } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios"

function Card({
  id,
  name,
  gender,
  species,
  onClose,
  myFavorites,
  location,
  image
}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  //   Si el estado isFav es true, entonces settea ese estado en false, y despacha la función deleteFavorite que recibiste por props pasándole el ID del personaje como argumento.
  // Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFavorite que recibiste por props, pasándole props como argumento.

  const addFavorite = async (character) => {
    await axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => dispatch(getFavorites()));
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      //
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={location.pathname != "/favorites" ? style.container : style.favoriteBG}>
      <div className={style.buttonsDiv}>
        {isFav ? (
          <button onClick={handleFavorite} className={location.pathname != "/favorites" ? style.favButton : style.favButtonCenter}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={style.favButton}>
            🤍
          </button>
        )}
        <button
          className={location.pathname != "/favorites" ? style.button : style.buttonNone}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      </div>


        <h2 className={style.text}>{name}</h2>
        <h2 className={style.text}>Specie: {species}</h2>
        <h2 className={style.text}>Gender: {gender}</h2>


      <Link to={`/detail/${id}`}>
        <img src={image} alt="" className={style.image} />
      </Link>
    </div>
  );
}


const mapStateToProps = (state) => {

  return {
      myFavorites: state.myFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeCharacter: (id) => {
          dispatch(removeCharacter(id))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
