import { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { Modal, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/CadastroForm.scss";

import styled from "styled-components";

export const Pmodall = styled.p`
  font-size: 25px;
  color: #355214;
  text-align: center;
`;

export const PSubb = styled.p`
  text-align: center;
`;

const CadastroForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const watchPassword = watch("password");

  const [showEmailError, setShowEmailError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const duplicateUser = userData.find((user) => user.email === data.email);

    if (duplicateUser) {
      setShowEmailError(true);
    } else {
      userData.push(data);
      localStorage.setItem("userData", JSON.stringify(userData));

      reset({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });

      setShowModal(true);
    }
  };

  const hideModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleEmailChange = () => {
    setShowEmailError(false);
  };

  return (
    <>
      <div className="banner">
        <div className="Containerr">
          <div className="header">
            <h2 className="titulo">Fazer Cadastro</h2>
          </div>
          <div className="form">
            <div className="app-container">
              {showEmailError && (
                <p className="error-message">Já existe um cadastro com este e-mail.</p>
              )}
              <div className="form-control">
                <label>Nome</label>
                <input
                  className={errors?.name && "input-error"}
                  type="text"
                  placeholder="Seu nome"
                  {...register("name", { required: true })}
                />
                {errors?.name?.type === "required" && (
                  <p className="error-message">Nome é Obrigatório.</p>
                )}
              </div>

              <div className="form-control">
                <label>E-mail</label>
                <input
                  className={errors?.email && "input-error"}
                  type="email"
                  placeholder="Seu Email"
                  {...register("email", {
                    required: true,
                    validate: (value) => isEmail(value),
                  })}
                  onChange={handleEmailChange}
                />
                {errors?.email?.type === "required" && (
                  <p className="error-message">Email é Obrigatório.</p>
                )}

                {errors?.email?.type === "validate" && (
                  <p className="error-message">Email inválido</p>
                )}
              </div>

              <div className="form-control">
                <label>Senha</label>
                <input
                  className={errors?.password && "input-error"}
                  type="password"
                  placeholder="Senha"
                  {...register("password", { required: true, minLength: 6 })}
                />

                {errors?.password?.type === "required" && (
                  <p className="error-message">Senha é Obrigatório.</p>
                )}

                {errors?.password?.type === "minLength" && (
                  <p className="error-message">
                    A senha precisa de pelo menos 6 caracteres
                  </p>
                )}
              </div>

              <div className="form-control">
                <label>Confirmação de senha</label>
                <input
                  className={errors?.passwordConfirmation && "input-error"}
                  type="password"
                  placeholder="Repita a senha"
                  {...register("passwordConfirmation", {
                    required: true,
                    validate: (value) => value === watchPassword,
                  })}
                />
                {errors?.passwordConfirmation?.type === "required" && (
                  <p className="error-message">
                    A confirmação de senha é obrigatória
                  </p>
                )}

                {errors?.passwordConfirmation?.type === "validate" && (
                  <p className="error-message">As senhas não combinam</p>
                )}
              </div>
              <div className="form-control">
                <button onClick={handleSubmit(onSubmit)}>Criar conta</button>
                <p>
                  <Link to="/" className="LinkBack">
                    Voltar à página inicial
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={hideModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Cadastro Concluído</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Pmodall>Seu cadastro foi realizado com sucesso.</Pmodall>
          <PSubb>Você será direcionado para a área de login!</PSubb>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CadastroForm;
