import React from 'react';
import './ListLinks.css';

/**
 * Componente ListLinks que renderiza uma lista de links com separadores
 * 
 * @param {array} links - Array de objetos contendo as informações dos links
 * @param {string} links[].text - O texto do link
 * @param {string} links[].href - O URL para onde o link aponta
 *  
 * */

const ListLinks = ({ links }) => {
    return (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href}>{link.text}</a>
                    {index < links.length - 1 && <span className="separator">|</span>}
                </li>
            ))}
        </ul>
    );
};

export default ListLinks;