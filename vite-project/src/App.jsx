import { BrowserRouter } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Produtos from "./componentes/Produtos";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Home />
        <Produtos /> 
        <Footer />      
    </BrowserRouter>
  );
}

export default App;
