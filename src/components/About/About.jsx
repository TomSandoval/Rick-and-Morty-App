import style from "./About.module.css";

function About() {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <div className={style.flexDiv}>
          <h3 className={style.title}>Rick And Morty App, By Tomás Sandoval</h3>
          <p className={style.paragraph}>
            La aplicación "Rick and Morty App" creada por Tomás Sandoval
            funciona consumiendo la API pública de Rick and Morty, la cual
            contiene información detallada sobre los personajes, episodios y
            lugares de la famosa serie de televisión animada. Al abrir la
            aplicación, el usuario se encontrará con una pantalla principal que
            le permitirá buscar y seleccionar el personaje que desea ver. Una
            vez seleccionado, la aplicación realizará una solicitud a la API
            para obtener la información correspondiente del personaje
            seleccionado. La información mostrada en pantalla incluirá detalles
            como el nombre del personaje, su especie, género, origen, ubicación
            actual e imagen de perfil. En resumen, "Rick and Morty App" es una
            aplicación diseñada por Tomás Sandoval para los fans de la serie de
            televisión animada "Rick and Morty". Su funcionamiento se basa en
            consumir la API pública de la serie para mostrar información
            detallada sobre los personajes, brindando una experiencia
            interactiva y sencilla de usar para los usuarios.
          </p>
        </div>
        <div className={style.flexDiv}>        
        <img
          className={style.image}
          src={require("../TomasSandoval-R&Mstyle.png")}
          alt="TomasSandoval"
        />
        <h4 className={style.imageTitle}>Tomás Sandoval</h4>
        </div>

      </div>
    </div>
  );
}

export default About;
