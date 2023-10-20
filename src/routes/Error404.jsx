import "./Error.scss"
import { Link } from "react-router-dom";
import Rodape from '../components/Rodape/Rodape'
export default function Erro404() {
    return (
      <>
        <div className="face">
	<div className="band">
		<div className="red"></div>
		<div className="white"></div>
		<div className="blue"></div>
	</div>
	<div className="eyes"></div>
	<div className="dimples"></div>
	<div className="mouth"></div>
</div>

<h1>Oops! Caminho errado, relaxe um pouco e descanse!</h1>
<div className="btn-voltar">
<a className="Voltar">
<Link to="/" className="Voltar" >Voltar</Link>
</a>
</div>
<br/>
<Rodape/>


      </>
    )
  }
  