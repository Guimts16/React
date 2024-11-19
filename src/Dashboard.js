import React, { useEffect, useState } from 'react';
import './Dash.css';
import logo from './assets/destroyer.gif';

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
            const parsedUser = JSON.parse(userFromStorage);
            setUser(parsedUser);
        } else {
            window.location.href = 'http://localhost:3000/login';
        }
    }, []);

    return (
        <div>
            <div class="sidebar">
                <h4>Plataform Destroyer</h4>
                <a href="https://localhost:3000/dashboard/comandos">Comandos</a>
                <a href="news.asp">News</a>
                <a href="contact.asp">Contact</a>
                <a href="about.asp">About</a>
            </div>
            <header>
                <div class="informations">
                </div>
                <div class="profile">
                    <img
                        class="profile-img"
                        src={user ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif` : logo}
                        alt="Avatar"
                    />
                </div>
            </header>
            <div class="dashboard">
                <img src={logo} alt="Logo" />
                <h2>Olá, {user ? user.username : logo}. Bem-vindo(a) ao Dashboard</h2>
            </div>
            <footer>
                <p>Desenvolvido por <a href="https://github.com/guimts16">Guimts</a></p>
            </footer>
        </div>
    );
}

export default Dashboard;
