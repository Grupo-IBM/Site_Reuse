
import "./App.module.scss"
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"
function App() {
  return (
    <>
       <Cabecalho/>
          <Outlet/>
       <Rodape/>
    </>
  )
}

export default App
