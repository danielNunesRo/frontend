import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Quem somos nós:</h2>
                        <p><p>O Programa de Incentivo e Capacitação para Mulheres no Mercado Tecnológico é uma iniciativa estratégica focada em promover a participação e o avanço das mulheres no setor de tecnologia. <br></br> Reconhecendo a sub-representação feminina, oferecemos suporte abrangente para capacitar e incentivar mulheres a ingressarem, avançarem e liderarem nesse mercado.</p>
<p>Nosso programa abrange educação técnica, habilidades de liderança, networking e mentoria, criando uma cultura inclusiva e diversificada no ambiente de trabalho tecnológico. <br></br> Promovemos equidade de gênero e combatemos preconceitos, alinhando-nos aos Objetivos de Desenvolvimento Sustentável 4 (Educação de Qualidade) e 5 (Igualdade de Gênero).</p>
<p>Oferecemos acesso a oportunidades de educação, treinamento especializado, programas de estágio e mentoria personalizada, visando aumentar a presença feminina e garantir que elas tenham as habilidades necessárias para alcançar sucesso e liderança. <br></br> Com parcerias estratégicas, incentivamos práticas de contratação inclusivas e desenvolvemos programas de capacitação para mulheres, contribuindo para um setor tecnológico mais diverso e inovador no estado do Ceará.</p></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
