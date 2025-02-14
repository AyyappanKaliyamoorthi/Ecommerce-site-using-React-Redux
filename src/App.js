import './App.css';
import List from './components/List';
import SelectedList from './components/SelectedList';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">       

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
      <Routes>
      <Route path="/" element={<List/>}></Route>
          <Route path="selectlist/:listId" element={<SelectedList/>}></Route>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
