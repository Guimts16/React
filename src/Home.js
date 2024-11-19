import './Home.css';
import logo from './assets/destroyer.gif'

function Home() {
    return (
        <body>
            <head>
                <title>Destroyer</title>
            </head>
            <header>

            </header>
            <div class="home">
                <img src={logo} alt="Logo" />
                <h2>Seja bem-vindo(a) ao dashboard destroyer. Para dar continuidade, entre em sua conta para verificar suas permissões.</h2>
                <button class="btn-login" onClick={() => {window.location.href = 'http://localhost:3000/login'}}>Entrar com discord</button>
            </div>
            <footer>
                <p>Desenvolvido por <a href="https://github.com/guimts16">Guimts</a></p>
            </footer>
        </body>
    );

}

  
export default Home;
  