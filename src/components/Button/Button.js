// src/components/Button/Button.js
import React from 'react';
import './Button.css';

/**
 * Componente Button que representa um botão clicável com estado de hover
 * 
 * @param {string} label - O texto a ser exibido dentro do botão 
 * @param {function} onClick - Função chamado quando o botão é clicado
 * @param {boolean} isHovered - Estado que indica se o botão está sendo hoverizado
 * @param {function} onMouseEnter - Função chamado quando o mouse entra na área do botão
 * @param {function} onMouseLeave - Função chamada quando o mouse sai da área do botão
 */

const Button = ({ label, onClick, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <button
            className={`button ${isHovered ? 'button-hovered' : ''}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {label}
        </button>
    );
};

export default Button;