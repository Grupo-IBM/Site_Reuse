
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// rotas
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error404 from './routes/Error404.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Usuario from './routes/Usuario.jsx'
import Sobre from "./routes/Sobre.jsx"

const router =createBrowserRouter([
  {path: "/", element:<App/>, errorElement: <Error404/>,
    children:[
      {path: "/", element: <Home/>},
      {path: "/cadastro", element: <Cadastro/>},
      {path:"/login", element:<Login/>},
      {path:"/usuario", element:<Usuario/>},
      {path:'/sobre',element:<Sobre/>}
    ]    
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
