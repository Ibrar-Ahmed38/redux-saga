import {getUsers } from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';




function App() {

  const disptach = useDispatch()
  const users = useSelector(state => state.users.users)

  useEffect( ()=>{
    disptach(getUsers())
  },[])

  return (
    <div className="App">
      <h1>React redux with redux saga</h1>
      {users.map( (user)=>{
        console.log(user)
        return( <h1>{user.name}</h1>)
        
      })}
    </div>
  );
}

export default App;
