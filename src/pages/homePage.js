import React, { useEffect } from "react";
import "../stylles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa"

import aneis from "../img/aneis.jpg";
import pulseiras from "../img/pulseiras.jpg";
import colares from "../img/colares.jpg";
import imgSobre from "../img/imgSobre.jpg";

function homePage() {
  //ANIMAÇÕES DO INICIO
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "left",
      distance: "100px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".txt");
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "right",
      distance: "100px",
      duration: 1000,
      delay: 800,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".formulario");
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "left",
      distance: "100px",
      duration: 1000,
      delay: 1000,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".btnCTA");
  }, []);





  //ANIMAÇÕES DOS PRODUTOS
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoProd = ScrollReveal({
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      delay: 100,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoProd.reveal(".aneis");
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoProd = ScrollReveal({
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoProd.reveal(".pulseiras");
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoProd = ScrollReveal({
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoProd.reveal(".colares");
  }, []);






  //ANIMAÇÕES DO SOBRE
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "left",
      distance: "100px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".imgSobre");
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "right",
      distance: "100px",
      duration: 1000,
      delay: 400,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".colTextSobre");
  }, []);




  return (
    <>
      <header className="cabecalho">
        <ReactBootstrap.Navbar expand="lg">
          <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand className="logo" href="/">
              LogoMarca
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootstrap.Nav className="me-auto">
                <ReactBootstrap.Nav.Link href="#inicio">
                  Início
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#produtos">
                  Produtos
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#quemSomos">
                  Quem Somos
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#contato">
                  Contato
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </header>

      <section id="inicio" className="body bgImage">
        <ReactBootstrap.Container>
          <ReactBootstrap.Row className="linha">
            <ReactBootstrap.Col className="txt">
              <h2>Bem-vindo à Lilla Joias e Semijoias</h2>
              <h3>perfeito para quem busca peças de alta qualidade e estilo</h3>
              <h5>
                Nossa loja online oferece uma ampla coleção de joias e semijoias
                exclusivas, cuidadosamente selecionadas para atender aos gostos
                mais refinados dos nosso clientes.
              </h5>
            </ReactBootstrap.Col>

            <ReactBootstrap.Col className="formulario">
              <h2>Converse com um consultor</h2>
              <h3>e adquira nossos produtos</h3>
              <div className="btnCTA">
                <ReactBootstrap.Button className="but">
                  Clique aqui
                </ReactBootstrap.Button>
              </div>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      <section id="produtos" className="produtos">
        <ReactBootstrap.Container>
          <h2>Nossos Produtos</h2>
          <ReactBootstrap.Row md={12} className="linhaProd">
            <ReactBootstrap.Col md={4} className="aneis">
              <ReactBootstrap.Image
                className="imgProd"
                src={aneis}
                alt="Aneis de prata"
                title="Aneis de prata"
              />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col md={4} className="pulseiras">
              <ReactBootstrap.Image
                className="imgProd"
                src={pulseiras}
                alt="Pulseiras de prata"
                title="Pulseiras de prata"
              />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col md={4} className="colares">
              <ReactBootstrap.Image
                className="imgProd"
                src={colares}
                alt="Colares de prata"
                title="Colares de prata"
              />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      <section id="quemSomos" className="sobre">
        <ReactBootstrap.Container>
          <div className="bgSobre">
            <h2>Quem somos</h2>
            <ReactBootstrap.Row className="linhaProd">
              <ReactBootstrap.Col className="imgSobre">
                <ReactBootstrap.Image
                  className="imgProd"
                  src={imgSobre}
                  alt="Quem Somos"
                  title="Quem somos"
                />
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colTextSobre">
                <p>
                  Elegância que brilha em cada detalhe <br />
                  <br />
                  Na Lilla, acreditamos que cada peça de joia conta uma história
                  e é uma expressão única de beleza. Nossos designers talentosos
                  combinam habilidades artesanais tradicionais com uma visão
                  contemporânea, resultando em criações deslumbrantes que
                  refletem a sofisticação e o bom gosto de nossos clientes.
                  <br />
                  <br />
                  Qualidade que perdura
                  <br />
                  <br />
                  Nosso compromisso com a qualidade é inabalável. Utilizamos
                  apenas materiais preciosos e semipreciosos da mais alta
                  qualidade, selecionados meticulosamente para garantir que cada
                  joia seja durável e exiba um brilho deslumbrante. Cada peça é
                  cuidadosamente inspecionada para garantir que atenda aos mais
                  altos padrões antes de ser entregue a você.
                  <br />
                  <br />
                  Estilo para todas as ocasiões
                  <br />
                  <br />
                  Seja para uma ocasião especial, um presente significativo ou
                  um mimo para si mesmo, a Lilla tem o que você procura. Nossa
                  coleção abrange desde peças clássicas e atemporais até designs
                  modernos e ousados, permitindo que você encontre a joia
                  perfeita para cada momento da sua vida.
                </p>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </div>
        </ReactBootstrap.Container>
      </section>

      <footer id="contato" className="footer">
        <ReactBootstrap.Container>
          <h2>Links e Contatos</h2>
          <ReactBootstrap.Row md={12} className="linhaFooter">
            <ReactBootstrap.Col md={6} className="colRedes">
            <ul className="listaLinks">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagramSquare /> Instagram{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="blank"
                  >
                    <FaWhatsappSquare /> Whatsapp{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="blank"
                  >
                    <FaLinkedin /> Linkedin
                  </a>
                </li>
              </ul>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col className="colunaCopyRight">
              <p>©2023 Lilla joias e semijoias. Todos os direitos reservados.<br/>Desenvolvido por LHR Mendes full stack developer</p>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </footer>
    </>
  );
}

export default homePage;
