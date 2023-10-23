import { useEffect } from "react";
import cupom from '../assets/img/cupom.png'
import Collapse from 'react-bootstrap/Collapse';
import "../assets/scss/Usuario.scss"
import { useState } from 'react';
export default function Usuario(){
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);

    // Função para buscar os dados do usuário na API
    const fetchUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/logins");
            const users = await response.json();
            const user = users[users.length - 1];

            setUser(user);
        } catch (error) {
            console.error("Erro ao buscar os dados do usuário na API:", error);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    return(
        <>
            <main className='container-main'>
                <div className="banner">
                    <div className="user-container">
                        <section className="cupom">
                            <h3>Bem vindo!</h3>
                            <img src={cupom}/>
                        </section>
                        <section className="pin">
                            <div className="pin-box">
                                <h2>Seu pin é: </h2>
                                {user && (
                                    <div className='pin-number'>
                                        {user.pin}
                                    </div>
                                )}
                            <h3 className='H3-PIN'>Seu histórico de deposíto: </h3>
                                <div className='info'>
                                <p>01/02/2023 - São Paulo, SP | Unidade 35
                                6Kg totais despejados -  1236pts</p>
                                <p>27/01/2023 - São Paulo, SP | Unidade 35
                                7Kg Totais despejados - 3433pts
                                </p>
                                <button onClick={() => setOpen(!open)}>Ler mais...</button>
                                <div style={{ minHeight: '150px' }}>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                    <p>12/02/2023 - São Paulo, SP | Unidade 35
                                         10Kg Totais despejados - 4233pts
                                    </p>
                                    </div>
                                </Collapse>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
