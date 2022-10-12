import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import ProductDisplay from './components/ProductDisplay'
import NewProductForm from './components/pages/NewProductForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<ProductDisplay/>}/>
          <Route path='/addProductForm' exact element={<NewProductForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
