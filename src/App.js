import {petIncrement, petDecrement } from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const disptach = useDispatch()
  
  return (
    <div className="App">
      <h1>React redux with redux saga</h1>
     
    </div>
  );
}

export default App;
