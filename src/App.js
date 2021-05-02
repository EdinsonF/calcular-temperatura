import React,{useState} from 'react';
import './index.css';
import Headers from './Components/Headers';
import Form from './Components/Form';
import ViewTemp from './Components/ViewTemp';
import CiudadError from './Components/CiudadError';


function App() {

    const [resultado, setresultado] = useState({});

    const [errorResultado, seterrorResultado] = useState({
      error : false,
      mensaje : ""
    })
 
  return (
   <>
      <Headers titulo="Clima en React"/>
        
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                  <Form setresultado={setresultado} 
                  
                        seterrorResultado={seterrorResultado}/>
              </div>
              <div className="col m6 s12">

                { errorResultado.error ? 
                    < CiudadError errorResultado={errorResultado}/>  :    <ViewTemp resultado={resultado}/>
                }
                  
              </div>

            </div>

          </div>
            
        </div>
          

    </>   
    
  );
}

export default App;
