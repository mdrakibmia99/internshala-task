import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './components/Routes/User/User';
import UserTable from './components/Routes/Usertable/UserTable';

function App() {
  const [user,setUser]=useState({});
  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<UserTable setUser={setUser}></UserTable>}></Route>
        <Route path='/user:email' element={<User user={user}></User>}></Route>
      </Routes>
    </div>
  );
}

export default App;
