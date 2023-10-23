import '../assets/scss/Usuario.scss'
import cupom from '../assets/img/cupom.png'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
export default function Usuario(){
    const [open, setOpen] = useState(false);
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
                                <div className='pin-number'>
                                    12345
                                </div>
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
                                    <p>12/02/2023 - São Paulo, SP | Unidade 35 - 10kg despejados
                                    </p>
                                    <p>25/02/2023 - São Paulo, SP | Unidade 35 - 14kg despejados
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