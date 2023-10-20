import "./Cabecalho.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/logo-cyberwave.png"
export default function Cabecalho(){
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar-items">
                        <img src={logo}/>
                        <ul>
                            <li className="Lista-navbar">
                                <a>
                                    <Link to="/cadastro" className="Link">Cadastro</Link>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <Link to="/login" className="estilo-entrar" >Login</Link>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}