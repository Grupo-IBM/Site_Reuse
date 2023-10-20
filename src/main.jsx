
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// rotas
import Error404 from './routes/Error404.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router =createBrowserRouter([
  {path: "/", element:<App/>, errorElement: <Error404/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
