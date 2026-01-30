import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/index.esm.js';

let lastPopUp = "a";

function App() {
  return (
    <>
      <Header />
      <PopUp />
      <Main />
      <Footer />   
    </>
  )
}

function Header(){
  return(
    <>
      <header onClick={() => soundOrAdd()==0? mostrarPopUp() : ""}>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="menuLateral">
          <div className="offcanvas-header">
            <img className="logo" src="/src/assets/imagenes/Logo_negro.png" width="80"/>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>

          <div className="offcanvas-body text-center fs-4">
            <a href="#" onClick={() => randomWindow()} className="d-block mb-4 text-decoration-none text-dark">Panadería</a>
            <a href="#" onClick={() => randomWindow()} className="d-block mb-4 text-decoration-none text-dark">Bollería</a>
            <a href="#" onClick={() => randomWindow()} className="d-block mb-4 text-decoration-none text-dark">Envíos</a>
          </div>
        </div>

        <Nav />
      </header>
    </>
  );
}

function Nav(){
  return(
    <>
      <nav className="navbar navbar-dark px-4">
        <button className="btn btn-light me-3" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
          <img src="/src/assets/imagenes/barra_lateral.png" width="35"/>
        </button>

        <a className="navbar-brand d-flex align-items-center gap-3" href="#" onClick={() => randomWindow()}>
          <img className="logo" src="/src/assets/imagenes/Logo_blanco.png" width="60"/>
          <h1 className="m-0 fs-3">Venture Panaderias</h1>
        </a>
      </nav>
    </>
  )
}

function Main(){
  function randomSound(){
    const audios = [
      "AnornioLobato.mp3",
      "carlos3.mp3",
      "desaparecer.mp3",
      "FAH.mp3",
      "goofy.mp3",
      "klara1.mp3",
      "klara3.mp3",
      "niggaa.mp3",
      "piano.mp3",
      "pitido_coche.mp3",
      "risa.mp3"
    ];
    
    const sonidoAleatorio = audios[Math.floor(Math.random() * audios.length)];
    
    const audio = new Audio(`/src/assets/sonidos/${sonidoAleatorio}`);
    audio.play().catch(e => console.log("Error al reproducir (necesitas interactuar primero):", e));
  }

  return(
    <>
      <main onClick={() => soundOrAdd==0 ? mostrarPopUp() : randomSound()}>
        <audio src={audio} id="audio" type="audio/mp3"></audio>
        <section className="container my-5">
          <h2 className="text-center mb-5">Productos Destacados</h2>

          <div className="row justify-content-center g-5">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-0 shadow-sm h-100 rounded-4" onClick={() => randomWindow()}>
                <img src="/src/assets/imagenes/producto_destacado_1.jpg" className="card-img-top"/>
                <div className="card-body">
                  <p className="fs-5">Pack Malvaviscos Variados</p>
                  <span className="badge bg-secondary fs-6">6.99€</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-0 shadow-sm h-100 rounded-4" onClick={() => randomWindow()}>
                <img src="/src/assets/imagenes/producto_destacado_2.jpg" className="card-img-top"/>
                <div className="card-body">
                  <p className="fs-5">Pack Malvavisco Triple</p>
                  <span className="badge bg-secondary fs-6">8.99€</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-0 shadow-sm h-100 rounded-4" onClick={() => randomWindow()}>
                <img src="/src/assets/imagenes/producto_destacado_3.jpg" className="card-img-top"/>
                <div className="card-body">
                  <p className="fs-5">Pack Malvavisco Triple Navideño</p>
                  <span className="badge bg-secondary fs-6">9.99€</span>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        <section className="principal container-fluid py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center px-5">
              <h2 className="mb-4">Los mejores panes de España</h2>
              <p className="fs-5">
                En Venture Panaderias horneamos cada pan con paciencia, pasion y manos artesanas. Usamos harinas seleccionadas, masa madre natural y tecnicas tradicionales que rescatan el sabor autentico del buen pan. Cada pieza sale del horno con el aroma, la textura y el corazon que nos distinguen como la panaderia con los mejores panes del pais.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <img src="/src/assets/imagenes/contenido_principal.png" className="img-fluid"/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function Footer(){
  return(
    <>
      <footer className="text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p>Calle Falsa 132, España</p>
              <p>Teléfono: 612-345-678</p>
              <div className="d-flex gap-2" onClick={() => randomWindow()}>
                <img src="/src/assets/imagenes/rrss.png" width="20"/>
                <img src="/src/assets/imagenes/insta.png" width="20"/>
                <img src="/src/assets/imagenes/facebook.png" width="20"/>
                <img src="/src/assets/imagenes/x.png" width="20"/>
              </div>
            </div>

            <div className="col-md-4 text-center">
              ©1999-2025 Venture Panaderias
            </div>

            <div className="col-md-4 d-flex justify-content-end">
              <a href="#top">
                <img src="/src/assets/imagenes/Logo_blanco.png" width="50"/>
              </a>
            </div>
          </div>
        </div>
      </footer>  
    </>
  )
}

function PopUp(){
  return (
    <>
      <div id='popup' className='popup hidden'>
        <button className="rounded-circle ps-2 pe-2 border-2" onClick={() => ocultarPopUp()}>X</button>
      </div>
    </>
  )
}

function mostrarPopUp(){
  const clases = [
    "popup1",
    "popup2",
    "popup3",
    "popup4",
    "popup5",
    "popup6",
    "popup7"
  ]
  let clase = clases[Math.floor(Math.random()*6)];

  const popup = document.getElementById("popup");
  if(popup){
    popup.classList.remove("hidden")
    popup.classList.remove(lastPopUp)
    popup.classList.add(clase)
    popup.classList.add("activo")
    lastPopUp = clase
  }
}

function ocultarPopUp(){
  const popup = document.getElementById("popup");
  if(popup) {
    popup.classList.remove("activo")
    popup.classList.add("hidden")
  }
}

function randomWindow(){
  const configuracion = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
  const enlaces =[
    "https://www.youtube.com/watch?v=lbsllaehnkE",
    "https://taburetecojo.com/",
    "https://media.cnn.com/api/v1/images/stellar/prod/cnne-212344-monkey-selfie.jpeg?c=original",
    "https://rule34dle.org/es/game",
    "https://www.reddit.com/r/programacion/",
    "https://longdogechallenge.com/",
    "http://www.staggeringbeauty.com/",
    "https://cat-bounce.com/",
    "https://clickclickclick.click/",
    "https://papertoilet.com/",
    "https://fallingfalling.com/",
    "https://www.koalastothemax.com/",
    "https://isitchristmas.com/",
    "https://www.thelastpageoftheinternet.com/",
    "https://drawing.garden/"
  ]
  const numero = Math.floor(Math.random()*14);
  window.open(enlaces[numero-1],"jijijiji",configuracion)
}

function soundOrAdd(){
  return Math.round(Math.random())
}



export default App
