import "./Cabecalho.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-cyberwave.png"
export default function Cabecalho(){
    return (
        <>
            <header>
                <div className="cabeca">
                    <nav className="navbar-items">
                        <Link to="/">
                            <img src={logo}/>
                        </Link>
                        <ul>
                            <li className="Lista-navbar">
                                    <Link to="/cadastro" className="Link">Cadastro</Link>
                            </li>
                            <li>
                                    <Link to="/login" className="estilo-entrar" >Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}