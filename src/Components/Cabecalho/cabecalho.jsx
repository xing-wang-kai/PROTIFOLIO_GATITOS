import React from "react";
import gatitologo from '../../img/headerGatitos.jpg'
import './styles/styles.css';
import { Link } from 'react-router-dom';

const Header = ( ) => {
    return(
    <header>
        <div className='logo_gatinho'>

            <div>
            <Link to="/" className='logo_gatinho--Ancora'>
                <img src={gatitologo} alt='logo gatito' className="logo_gatinho--img"/>
            </Link>
            </div>
            <div>
            <h2 className="titulo-cabecalho"> Meow... Meow... Bem Vindos! </h2>
            <nav className="header_navbar">
                <ul className="header_navbar-list">
                    <li className="header_navbar-list--item"><Link to="/login">Entrar</Link></li>
                    <li className="header_navbar-list--item"><Link to="/produtos">Produtos</Link></li>
                    <li className="header_navbar-list--item"><Link to="/blog">Blog</Link></li>
                    <li className="header_navbar-list--item"><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>)
}

export default Header;