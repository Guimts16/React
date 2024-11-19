import React, { useEffect } from "react";

function Login() {

    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        const userData = search.get('user');
        const userFromStorage = localStorage.getItem('user');
        if (!userFromStorage && !userData) {
            const timer = setTimeout(() => {
                window.location.href = 'http://localhost:3001/login';
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            if (userData) {
                try {
                    const user = JSON.parse(userData);
                    
                    if (user && user.id) {
                        localStorage.setItem('user', JSON.stringify(user));
                    } else {
                        throw new Error("Invalid user data");
                    }

                    window.location.href = 'http://localhost:3000/dashboard';
                } catch (error) {
                    console.error("Error parsing user data:", error);
                    localStorage.removeItem("user");
                    window.location.href = 'http://localhost:3000/login';
                }
            } else if (userFromStorage) {
                const timer = setTimeout(() => {
                    window.location.href = 'http://localhost:3000/dashboard';
                }, 500);
            }
        }
    }, []);

    return (
        <div className="redirect">
            <h1>Redirecionando...</h1>
            <div className="loading-spinner"></div>
        </div>
    );
}

export default Login;