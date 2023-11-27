import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/UserSlice';
import ListUsers from './components/ListUsers';

function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.users.loading)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="App">
      { loading ? <h1>En cours de chargement</h1> : 
      <ListUsers />
      }
    </div>
  );
}

export default App;
