import reuse from '../../assets/reuse-logo 1.png'
import { Container } from "./Corpo.stlyles"
import "./Corpo.scss"

export default function Corpo(){
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