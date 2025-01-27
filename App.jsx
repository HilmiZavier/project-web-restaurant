
// import Login from './components/login';
// // import Menu from './components/menu';
import Makanan from './components/makanan';
// import Drink from './components/DrinkSelecto';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<About/>} />
        <Route path="/menu/makanan" element={<Makanan/>} />
        
      </Routes>
    </Router>
  )
  // (
  //   // <div>
      
  //   //   <Makanan /> {/* Memanggil komponen makanan */}
  //   // </div>
  // );
};

export default App;
