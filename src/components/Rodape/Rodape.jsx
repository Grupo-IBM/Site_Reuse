import "./Rodape.scss"
import mapa from "../../assets/img/Mapa.png"
import Insta from "../../assets/img/image.png"
import Linkedin from "../../assets/img/linkedin.png"
export default function Rodape(){
    const list = [
        {
          img: Insta,
          nome: '@Reuse'
        },
        {
          img: Linkedin,
          nome: '@Reuse'
        },
        {
          img: Linkedin,
          nome: '@CyberWave'
        }
      ];
    
    return(
        <>
            <div className="tudo">
                <footer>
                    <div className="footer-container">
                        <div  className="mapa">
                            <img src={mapa} alt="Mapa"/>
                        </div>
                        <div className="redes"> 
                            <ul>
                                {list.map((rede,i)=>(
                                    <li key={i}>
                                        <img src={rede.img} alt={rede.nome} style={{height: '45px'}}/>
                                        <a href="#">{rede.nome}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="contato">
                            <p>©reUse™ - Uma iniciativa CyberWave. <br/>
                                2023, todos os direitos reservados. <br/>
                                00+ 00 0000-0000 <br/>
                                Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000 <br/>
                            Compromisso com a Sustentabilidade: Reduzindo, Reutilizando e Reciclando para um Futuro Melhor.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}