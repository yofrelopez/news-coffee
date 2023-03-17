import React from 'react'
import ListaBarranca from './ListaBarranca';


const listaBarrancaSocialNews = [
        {id:'barrancanoticias24.7', name:'BcaNoticias 24/7'},
        {id:'BarrancaDigital123', name:'Barranca Digital'},
        {id:'100063685266683', name:'Nuevo Noticias'},
        {id:'Smitel-tv-667991596564735', name:'Smitel tv'},
        {id:'Linea-abierta-mujer-en-acción-999731083431195', name:'Mujer en acción'},
        {id:'100063467411773', name:'El Centinela Noticias'},
        {id:'notibarranca', name:'Noti Barranca'},
        {id:'DIA7LAVOZDESUPE', name:'Día 7 La Voz de Supe'},
        {id:'BCATVNOTICIAS', name:'Bca Tv Noticias'},
        {id:'antena9CanalDigital', name:'Antena 9'},
        {id:'barranca.pe', name:'Barranca Noticias'},
        {id:'contrapoder.live', name:'Contra Poder'},
        {id:'Noticias-de-Impacto-Barranca-110862043926496', name:'Noticias de Impacto'},
        {id:'Etcetera.pe', name:'ETC Barranca'},
        {id:'Barranca.Deportes', name:'Barranca Deportes'},
        {id:'nedteltv', name:'NedTel Paramonga'},
        {id:'ExitosaBarranca', name:'Exitosa Barranca'},
        {id:'supedespierta', name:'Supe Despierta'},
        {id:'100063551057823', name:'Supe Noticias'},
        {id:'satelitefmradio', name:'Radio Satélite'},
        {id:'RadioDigitalBarranca', name:'Radio Digital Barranca'},
]

const Barranca = () => {
  return (
    <>
        <h1>Barranca </h1>
        <div className='d-flex flex-wrap d-flex justify-content-around'>
            {
                listaBarrancaSocialNews.map((item)=>(
                    <ListaBarranca key={item.id} id={item.id} name={item.name} />
                ))
            }
        </div>
        
    </>
  );
}

export default Barranca