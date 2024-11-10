import React from 'react';
import styles from './header.css';

export default function Header() {
    return(
        <header>
            <div>
                <img src='/' />
            </div>
            <nav>
                <li>
                    <a href="">Como fazer</a> /
                </li>
                <li>
                    <a href="">Ofertas</a> /
                </li>
                <li>
                    <a href="">Depoimentos</a> /
                </li>
                <li>
                    <a href="">Vídeos</a> /
                </li>
                <li>
                    <a href="">Meu carrinho</a> /
                </li>
            </nav>
        </header>
    );
}

