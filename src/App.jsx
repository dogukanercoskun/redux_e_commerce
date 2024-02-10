import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Products from './pages/Products';
import Header from "./components/Header";

function App() {
  

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
