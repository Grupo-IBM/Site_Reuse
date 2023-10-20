import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal ,Button} from "react-bootstrap";
import { Pmodal } from "./Login.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.scss"
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/logins")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);

        if (user) {
            setShowModal(true)
        } else {
          alert("Autenticação falhou. Verifique suas credenciais.");
        }
      });
  };
  const hideModal = () => {
    setShowModal(false);
    setTimeout(() => {
        navigate("/usuario")
    }, 2000);
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="header">
          <h2 className="titulo">Fazer Login</h2>
        </div>
        <div className="form">
          <div className="app-container">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="Seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <button type="submit">Fazer Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bem Vindo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Pmodal>Seja Bem vindo a reUse, é um prazer em  tê-lo  conosco</Pmodal>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}
