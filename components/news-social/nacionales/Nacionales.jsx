import React from "react";
import ListaRegionales from "./ListaNacionales";

const listaDeNacionales = [
  { id: "rppnoticias", name: "RPP Noticias" },
  { id: "agenciandina", name: "Agencia Andina" },
  { id: "diariooficialelperuano", name: "Diario El Peruano" },
  { id: "Exitosanoticias", name: "Exitosa Noticias" },
  { id: "CorteSuprema", name: "Poder Judicial" },
  { id: "contraloriadelperu", name: "Contraloría del Perú" },
  {
    id: "ActualidadRT",
    name: "RT Actualidad",
  },
  {
    id: "dw.espanol",
    name: "DW Edpañol",
  },
  { id: "BBCnewsMundo", name: "BBC News Mundo" },
  { id: "derechosdigital", name: "Derechos Digitales" },
  { id: "bloghemia", name: "Revista Argentina" },
  { id: "acTVism", name: "acTVism" },
  { id: "100075860895165", name: "En La Mira" }
];

const Nacionales = () => {
  return (
    <>
      <h1>Barranca </h1>
      <div className="d-flex flex-wrap d-flex justify-content-around">
        {listaDeNacionales.map((item) => (
          <ListaRegionales key={item.id} id={item.id} name={item.name} />
        ))}

        <a class="twitter-timeline"
          data-width="350"
          data-height="550"
          href="https://twitter.com/OCMAPJ?ref_src=twsrc%5Etfw">Tweets by OCMAPJ</a>
          
      </div>

      


    </>
  );
};

export default Nacionales;
