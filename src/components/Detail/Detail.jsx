import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  return (
    <div className={style.allContainer}>
      {character.name ? (
        <div className={style.containerCard}>
          <div className={style.divFlex}>
            <h2 className={style.titleCard}>Name: {character.name}</h2>
            <br />
            <p className={style.textCard}>Status: {character.status}</p>
            <br />
            <p className={style.textCard}>Specie: {character.species}</p>
            <br />
            <p className={style.textCard}>Gender: {character.gender}</p>
            <br />
            <p className={style.textCard}>Location: {character.location?.name}</p>
            <br />
            <p className={style.textCard}>Origin: {character.origin?.name}</p>
          </div>
            <img src={character.image} alt="" className={style.image} />
        </div>
      ) : (
        <div className={style.containerLoading}>
          <img
            className={style.gift}
            src={require("../portal-rick-and-morty.gif")}
            alt=""
          />
          <h3 className={style.loadingText}>Loading...</h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
