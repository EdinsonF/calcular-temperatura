import React from 'react';

import PropTypes from 'prop-types';

const CiudadError = ({errorResultado}) => {
  
  return ( 
    <>
        <div className="card-panel white col s12">
          <div className="black-text">
            
                <h2>{errorResultado.mensaje}</h2> 
            

          </div>

        </div>
    </>
   );
}

CiudadError.propTypes = {
  errorResultado: PropTypes.object.isRequired
}

 
export default CiudadError;