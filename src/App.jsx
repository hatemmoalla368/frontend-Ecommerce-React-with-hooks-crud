import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Listcategories from "./components/categories/Listcategories";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Listscategories from "./components/scategories/Listscategories";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Menu from "./components/Menu";

function App() {
 

  return (
    <>
     <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" exact element={<Listarticles/>}/>
        <Route path="/articles/add" exact element={<Insertarticle/>}/>
        <Route path="/article/edit/:id" exact element={<Editarticle/>}/>
        <Route path="/categories" exact element={<Listcategories/>}/>
        <Route path="/categories/add" exact element={<Insertcategorie/>}/>
        <Route path="/categorie/edit/:id" exact element={<Editcategorie/>}/>
        <Route path="/scategories" exact element={<Listscategories/>}/>
        <Route path="/scategories/add" exact element={<Insertscategorie/>}/>
        <Route path="/scategorie/edit/:id" exact element={<Editscategorie/>}/>
        
      </Routes>
     </Router>
    </>
  )
}

export default App
