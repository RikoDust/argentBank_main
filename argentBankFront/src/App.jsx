import { Provider } from 'react-redux'
import RoutesComponent from './RoutesComponent';
import store from './Redux/store';
import './styles/main.css'



function App() {
  return ( 
    <Provider store={store}> 
      <div>
          <RoutesComponent />
      </div>
      </Provider>
  );
}




export default App
