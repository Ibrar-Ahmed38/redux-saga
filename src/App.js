import {getUsers } from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';




function App() {

  const disptach = useDispatch()
  const users = useSelector(state => state.users.users)
  const loading = useSelector(state =>  state.users.loading)
  const error = useSelector(state => state.users.error)

  useEffect( ()=>{
    disptach(getUsers())
  },[])

  return (
    <div className="App">
      <h1>React redux with redux saga</h1>
      {loading && <h1>Loading...</h1>}
      {error && !loading && <h1>{error}</h1>}
     {users && users.map( (user)=>{  return(<h1>{user.name}</h1>)})}
    </div>
  );
}

export default App;
