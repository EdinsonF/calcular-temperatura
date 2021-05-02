import React, {useState} from 'react';
import PropTypes from 'prop-types'

const Form = ({setresultado , seterrorResultado}) => {

  const [data, setdata] = useState({
    pais:"",
    ciudad:""
  })

  const {pais , ciudad} = data;


  const [error, setError] = useState(false);

  const llenarState = (e) => {

    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }


  const enviarForm = async e => {
    e.preventDefault();

    if(pais.trim() === ''  || ciudad.trim() === ''){
      setError(true);
      return;
    }

    setError(false);

    //CONSULTAMOS API
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=dd91a5392f74fd6bf1e8c772fd426702`);

    const data = await res.json();

    if(data.cod === "404") {
      seterrorResultado({
        error: true,
        mensaje: "Ciudad no encontrada"
      });


      return;
    }

    seterrorResultado({
      error: false,
      mensaje: ""
    });

    const {temp , temp_min, temp_max } = data.main;
  
    const tempC = parseFloat( temp - 273.15 ).toFixed(2);
    const minC  = parseFloat( temp_min - 273.15 ).toFixed(2);
    const maxC  = parseFloat( temp_max - 273.15 ).toFixed(2);

    setresultado({
      pais,
      ciudad,
      tempC,
      minC,
      maxC
    });

    
    

  }
  return ( 
    <>
        { error ? <p className="red darken-4 error"> Todos los campos son obligatorios</p> : null}
        <form className="contenedor-form" onSubmit={enviarForm}>

            <div className="input-field col s12">
                  
              <select name="pais" id="pais" onChange={llenarState}>
                  <option value="" >--Seleccione un Pais--</option>
                  <option value="US">Estados Unidos</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CL">Chile</option>
                  <option value="EC">Ecuador</option>
                  <option value="ES">España</option>
                  <option value="MX">México</option>
                  <option value="PE">Perú</option>
                  <option value="VE">Venezuela</option>

              </select>
              <label htmlFor="pais">Pais:</label>
            </div>
            
            <div className="input-field col s12">
              <input 
                  type="text" 
                  name="ciudad"
                  id="ciudad"
                  onChange={llenarState}
              />
              <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>

        </form>   
    </>
   );
}
  

Form.propTypes = {
  setresultado: PropTypes.func.isRequired,
  seterrorResultado: PropTypes.func.isRequired

}
 
export default Form;