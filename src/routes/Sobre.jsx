import "../assets/scss/Sobre.scss"
import styled from "styled-components"
import mapa from "../assets/img/Mapa.png"
import fundo from "../assets/img/home-fundo.png"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export const Container = styled.div`
background-image: url(${fundo});
background-size: cover;
background-position: center;
padding: 10rem 0;
`
export default function Sobre(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <Container>
                <div className="box-about">
                    <h2>Quem Somos?</h2>
                        <p>
                        A iniciativa reUse, criada pela empresa CyberWave em 2023, é um exemplo
                        inspirador de comprometimento com a sustentabilidade e responsabilidade ambiental 
                        </p>
                        <p>
                        A reUse é uma empresa dedicada à reciclagem que se destaca por sua abordagem
                        inovadora: recompensar os usuários por adotarem práticas de reciclagem
                        responsável. Essa abordagem criativa visa não apenas promover a reciclagem, mas
                        também incentivar o engajamento das pessoas na construção de um mundo mais
                        limpo e sustentável.
                        </p>
                       <p>
                        Com sua missão voltada para um mundo melhor e mais
                        sustentável, a iniciativa reUse exemplifica como as empresas podem desempenhar
                        um papel fundamental na promoção da consciência ambiental e na busca por
                        soluções criativas para os desafios ambientais atuais
                       </p>
                       <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Saiba nossos pontos de coleta!
                        </Button>
                        <div style={{ minHeight: '250px' }} className="collapse-mapa">
                            <Collapse in={open} dimension="width">
                            <div>
                                <Card body style={{ width: '500px' }} className="card-mapa">
                                    <img src={mapa}/>
                                </Card>
                            </div>
                            </Collapse>
                        </div>
                </div>
            </Container>    
        </>
    )
}