import logo from "../../assets/reuse-logo 1.png"
import { Link } from "react-router-dom";
import './Logo.scss'
export default function Logo(){
    return(
        <>
            <header>
                <Link to="/"><img src={logo}/></Link>
            </header>
        </>
    )
}