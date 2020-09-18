import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Toolbar from './components/Toolbar/Toolbar'


class App extends Component {
render(){
  return (
 
    <div className="App">
  
    <Particles className='particles'
              params={{
            		particles: {
            			number:{
                    value: 100,
                    density:{
                      enable: true,
                      value_area: 800
                    }
                  }
            				}
            			}
            		}
           
              
            /> 
              

      <main style={{marginTop: '64px'}}></main>
    <Toolbar />
    
    
      </div>
    
  );
}
}


export default App;
