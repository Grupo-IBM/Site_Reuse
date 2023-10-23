import styled from "styled-components"
import fundo from "../assets/img/home-fundo.png"
import reuse from '../assets/img/reuse-logo 1.png'
import "../assets/scss/Corpo.scss"


export const Container = styled.div`
background-image: url(${fundo});
background-size: cover;
background-position: center;
padding: 10rem 0;
`

export default function Home(){
    return(
        <>
            <div className="Container">
                <main>
                    <Container className='main-banner'>
                        <div className="logo-container">
                            <img src={reuse} alt="Logo da Reuse" className='Logo'/>
                        </div>
                        <p>Reciclar: a pequena ação que gera ondas gigantes de mudança para o nosso mundo</p>
                    </Container>
                </main>
            </div>
        </>
    )
}