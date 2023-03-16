import Cards from "./Cards/Cards";
import { useState } from "react";
import Nav from "./Nav/Nav";





function Home (props) {
    return(
        <>
        <div className="tittle">
        <h1>Rick and morty app</h1>
      </div>
    <div className="characters">
      <Cards characters={props.characters} onClose={props.onClose} location= {props.location}/>
    </div>
    </>
    )
}


export default Home;