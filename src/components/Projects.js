import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Desenvolvimento Web Full Stack",
      description: "Aprenda a criar e manter sites e aplicativos web utilizando tecnologias front-end e back-end.",
      imgUrl: projImg1,
    },
    {
      title: "Cibersegurança",
      description: "Adquira conhecimentos para proteger sistemas e dados contra ameaças e ataques cibernéticos.",
      imgUrl: projImg2,
    },
    {
      title: "Data Science e Análise de Dados",
      description: "Domine a análise de dados e a criação de modelos de machine learning para resolver problemas complexos.",
      imgUrl: projImg3,
    },
    {
      title: "Desenvolvimento de Aplicativos Móveis",
      description: "Desenvolva habilidades para criar aplicativos móveis inovadores para plataformas iOS e Android.",
      imgUrl: projImg4,
    },
    {
      title: "Gestão de Projetos em Tecnologia",
      description: "Aprenda a gerenciar projetos de TI utilizando metodologias ágeis e ferramentas de gestão de projetos.",
      imgUrl: projImg5,
    },
    {
      title: "Inteligência Artificial e Machine Learning",
      description: "Explore os fundamentos da IA e aprenda a implementar algoritmos de machine learning em aplicações reais.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Cursos</h2>
                <p>O Programa de Incentivo e Capacitação para Mulheres no Mercado Tecnológico oferece diversos cursos para capacitar mulheres no setor de tecnologia. Nossas opções incluem desenvolvimento web, cibersegurança, data science e mais, proporcionando habilidades práticas e técnicas essenciais.Não perca essa chance e se inscreva no nosso processo seletivo!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Cursos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Processo Seletivo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Para participar do nosso Programa de Incentivo e Capacitação para Mulheres no Mercado Tecnológico, siga os seguintes passos:</p>
                      <p>Inscrição: Preencha o formulário de inscrição disponível em nosso site.</p>
                      <p>Seleção de Curso: Escolha o curso que mais se alinha aos seus interesses e objetivos profissionais.</p>
                      <p>Análise: Sua inscrição será cuidadosamente analisada pela nossa equipe, que avaliará os critérios e selecionarão as candidatas que farão parte do programa.</p>
                      <p>Não perca essa chance de transformar sua carreira. Inscreva-se e selecione o curso desejado para começar sua jornada conosco!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
