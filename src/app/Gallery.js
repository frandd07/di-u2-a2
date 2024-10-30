import { getImageUrl } from './utils.js';

//manera 1 de hacerlo
const persona1 = {
  name: "Marie Curie" ,
  imagen:"szV5sdG" ,
  profesion:"Física y Química" ,
  nPremios:6 ,
  premios:"Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci" ,
  descubrimiento:"polonio (elemento químico)"
}

function Profile({nombre,imagen,profesion,nPremios,premios,descubrimiento}) {
  return (
    <section className="profile">
      <h2>{nombre}</h2>
      <img
        className="avatar"
        src={getImageUrl(imagen)}
        alt={nombre}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profesión: </b>
          {profesion}
        </li>
        <li>
          <b>Premios: {nPremios}</b><br></br>
          {premios}
        </li>
        <li>
          <b>Descubrió: </b>
          {descubrimiento}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile name = {persona1.name} imagen={persona1.imagen} profesion={persona1.profesion} nPremios={persona1.nPremios} premios={persona1.premios} descubrimiento={persona1.descubrimiento}/>
      //manera 2 de hacerlo
      <Profile name= "Katsuko Saruhashi" imagen="YfeOqp2" profesion="Geoquímica" nPremios={2} premios="Premio Miyake de geoquímica, Premio Tanaka" descubrimiento="un método para medir el dióxido de carbono en el agua de mar"></Profile>
      //manera 3 de hacerlo, meter const en un nuevo js y exportarlo y hacer lo mismo
    </div>
  );
}
