import React,{useState} from 'react';
import './index.css';
import Headers from './Components/Headers';
import Form from './Components/Form';
import ViewTemp from './Components/ViewTemp';

function App() {

    const [resultado, setresultado] = useState({})
 
  return (
   <>
      <Headers titulo="Clima en React"/>
        
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                  <Form setresultado={setresultado}/>
              </div>
              <div className="col m6 s12">
                  <ViewTemp resultado={resultado}/>
              </div>

            </div>

          </div>
            
        </div>
          

    </>   
    
  );
}

export default App;
