import React from "react";
import "./Header.css";

export default ({black}) => {
    return (
      <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a hraf="/">
                <img src="https://netflix-clone-m2ov9gj4h-leeonardovargas.vercel.app/static/media/logo.f1560710.png" alt="Netflix" />
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt="usuário" />
            </a>
        </div>
      </header>
    );
}