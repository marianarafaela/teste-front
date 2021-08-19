
import './App.css';
import zayra8 from './assets/images/zayra8.jpeg'
import fotomeio from './assets/images/zayra7.png'
import zayra1 from './assets/images/zayra1.png'
import facebook from './assets/images/facebook.png'
import email from './assets/images/email.png'
import instagram from './assets/images/instagram.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-header">
          <h2>LOGIN</h2>
        </div>
      </header>
      <body>
        <div className="container-rosa">
          <a ><h1>Cat Gallery</h1> </a>
          <div className="fotos">
            <img src={zayra8} />
            <img className="fotomeio" src={fotomeio} />
            <img src={zayra1} />

          </div>
          <div className="vermais">
            <a href="">Ver Mais</a>
          </div>

        </div>
        <div className="container-branco">
          <div className="txt-parte-branca">
            <h2>Eternize seu amor pelo seu pet com a nossa </h2>
          </div>
          <div className="txt-parte-branca2">
            <h2>galeria online.</h2>
          </div>
          <div className="icones">
            <img className="logo" src={facebook} />
            <img className="logo1" src={email} />
            <img className="logo" src={instagram} />
          </div>

        </div>
      </body>
      <footer>
        <div className="container-footer">
          <h2 className="text">marianarafaela.c.santana@gmail.com</h2>
          <h2 className="text2">(11) 943544113</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
