import React, 
{ 
  BrowserRouter as Router, 
  Route, Routes
} 
from 'react-router-dom';
import StoreList from './components/StoreList';
import AddStore from './components/AddStore';
import EditStore from './components/EditStore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<StoreList />} />
        <Route path="/add-store" element={<AddStore />} />
        <Route path="/edit-store/:id" element={<EditStore />} />
      </Routes>
    </Router>
  );
};


export default App;
