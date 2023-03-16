import React from 'react'
import "./Style.css";

// Componente para presentar los personajes obtenidos en forma de tarjetas
const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {
            // Las llaves se utilizan para crear una expresión de JavaScript
            characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card tarjetas'>
                        <img src={item.image} alt='' />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr />
                            <p><b>Species: </b>{item.species}</p>
                            <p><b>Location: </b>{item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  );
}

export default Characters
