import React from "react";
import ListaRegionales from "./ListaRegionales";

const listaInstPubRegionales = [
  { id: "GobiernoRegionalLima", name: "Gobierno Regional de Lima" },
  { id: "ConsejoRegionalLima", name: "Consejo Regional de Lima" },
  { id: "diresalimaoficial", name: "Diresa Lima" },
  { id: "DRALimaOficial", name: "Dirección de Agricultura" },
  { id: "100089204647487", name: "Municipalidad Provincial de Barranca" },
  { id: "muniparamongaoficial", name: "Municipalidad Distrital de Paramonga" },
  { id: "MunicipalidadDePativilca", name: "Municipalidad Distrital de Pativilca" },
  {
    id: "MunicipalidadSupePuerto",
    name: "Municipalidad Distrital de Supe Puerto",
  },
  {
    id: "municiaplidaddistritaldesupe20192022",
    name: "Municipalidad Distrital de Supe",
  },
  { id: "UNABOFICIAL", name: "Universidad Nacional de Barranca" },
  { id: "HospitalBarrancaCajatamboSBS", name: "Hospital de Barranca" },
  { id: "DRELP.ImagenInstitucional", name: "Direccion Regional de Educación" },
  { id: "epsbarranca", name: "EPS Barranca" },



  { id: "Ugel16Barranca", name: "Ugel 16 Barranca" },
  { id: "CorteSuperiorDeJusticiaDeHuaura", name: "Corte Superior de Huaura" },
  { id: "contraloriadelperu", name: "Contraloría de la República" },
  { id: "FiscaliaPeru", name: "Fiscalía de la Nación" },
  { id: "CorteSuprema", name: "Poder Judicial" },
  { id: "JuntaNacionalDeJusticiaPeru", name: "Junta Nacional de Justicia" },
];

const RegionalesInstPub = () => {
  return (
    <>
      <h1>Barranca </h1>
      <div className="d-flex flex-wrap d-flex justify-content-around">
        {listaInstPubRegionales.map((item) => (
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

export default RegionalesInstPub;
