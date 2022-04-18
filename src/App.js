import './App.css';
import Home from './Components/home/Home.jsx';
import Sobre from './Components/Sobre/Sobre.jsx';
import NotFound from './Components/notFound/pagina404';
import Header from './Components/Cabecalho/cabecalho';
import Footer from './Components/footer/footer.components'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import PostOne from './Components/Posts/PostOne.components';
import Index from './Components/index';

function App() {
  return (
    <div className="App">
      
      <Router>
       <Header />
        <Routes>
          <Route exact path='/'   element={<Index />} />
          <Route exact path="/blog"      element={ <Home/>}    />
          <Route       path="/sobre" element={<Sobre/>}    />
          <Route       path='*'              element={<NotFound />} />
          <Route       path='posts/:id'              element={<PostOne />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
