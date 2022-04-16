import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, ProductDetail, Purchases } from './pages';
import { Footer, LoadingScreen, NavBar, ProtectedRoutes } from './components';
import './App.css';
import { useSelector } from 'react-redux';


function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter>

        { isLoading && <LoadingScreen/> }
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
         
          <Route element={<ProtectedRoutes />}  >
            <Route path="/purchases" element={<Purchases />} />
          </Route>  
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
