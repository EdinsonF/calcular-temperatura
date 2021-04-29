import React from 'react';

const ViewTemp = ({resultado}) => {

  
const {pais, ciudad , tempC , minC , maxC } = resultado;

if(!tempC)  return null;


  return ( 
    <>
        <div className="card-panel white col s12">
          <div className="black-text">
            <h2> El clima de {ciudad} es:</h2>
            <p className="temperatura">
                {tempC}
            </p>
          </div>

        </div>
    </>
   );
}
 
export default ViewTemp;