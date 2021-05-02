import React from 'react';
import PropTypes from 'prop-types';

const ViewTemp = ({resultado}) => {

  
const { ciudad , tempC , minC , maxC } = resultado;

if(!tempC)  return null;


  return ( 
    <>
        <div className="card-panel white col s12">
          <div className="black-text">
            <h2> El clima de {ciudad} es:</h2>
            <p className="temperatura">
                {tempC} <span> &#x2103;</span>
            </p>

            <p> Maxima: 
                {maxC} <span> &#x2103;</span>
            </p>

            <p> Minima:
                {minC}  <span> &#x2103;</span>
            </p>
          </div>

        </div>
    </>
   );
}

ViewTemp.propTypes = {
  resultado: PropTypes.object.isRequired
}

export default ViewTemp;