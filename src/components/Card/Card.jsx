import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { addCharacter, removeCharacter } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(!isFav);
      props.removeCharacter(props.id);
    } else {
      setIsFav(!isFav);
      props.addCharacter(props);
    }
  };

  console.log(props)
  return (
    <div className={props.location.pathname != "/favorites" ? style.container : style.favoriteBG}>
      <div className={style.buttonsDiv}>
        {isFav ? (
          <button onClick={handleFavorite} className={props.location.pathname != "/favorites" ? style.favButton : style.favButtonCenter}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={style.favButton}>
            🤍
          </button>
        )}
        <button
          className={props.location.pathname != "/favorites" ? style.button : style.buttonNone}
          onClick={() => {
            props.onClose(props);
          }}
        >
          X
        </button>
      </div>


        <h2 className={style.text}>{props.name}</h2>
        <h2 className={style.text}>Specie: {props.species}</h2>
        <h2 className={style.text}>Gender: {props.gender}</h2>


      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="" className={style.image} />
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
      addCharacter: (char) => {
          dispatch(addCharacter(char))
      },
      removeCharacter: (id) => {
          dispatch(removeCharacter(id))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
