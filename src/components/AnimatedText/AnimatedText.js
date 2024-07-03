import React, { useState, useEffect } from 'react';
import './AnimatedText.css';
/**
 * Componente AnimatedText que exibe um texto de forma animada, carectere por caractere
 * 
 * @param {string} text - O texto que será exibido de forma animada. 
 * @param {function} onComplete - Função chamada quando a animação do texto é completada
 */

const AnimatedText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState(''); // Estado para o texto exibido atualmente
    const [index, setIndex] = useState(0); // Índice atual do caractere a ser exibido
    const [showCursor, setShowCursor] = useState(true); // Estado para exibir ou ocultar o cursor

    // Hook de efeito para controlar a animação do texto
    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 50); // Velocidade de digitação

            return () => clearTimeout(timeout); // Limpa o timeout anterior
        } else {
            const displayTimeout = setTimeout(() => {
                const cursorTimeout = setTimeout(() => {
                    setShowCursor(false);
                    const hideTimeout = setTimeout(() => {
                        setDisplayedText('');
                        setIndex(0);
                        setShowCursor(true);
                        onComplete(); // Chama a função onCOmplete após a animação do texto
                    }, 1000); // Tempo antes do próximo texto

                    return () => clearTimeout(hideTimeout); // Limpa o timeout do pŕoximo texto
                }, 2000); // Tempo de exibição após o texto completo

                return () => clearTimeout(cursorTimeout); // Limpa o timeout do cursor
            }, 1000); // Tempo antes de esconder o cursor

            return () => clearTimeout(displayTimeout); // Limpa o timeout de exibição
        }
    }, [index, text, onComplete]);

    return (
        <div className="animated-text-container">
            <h1 className="animated-text">
                {displayedText}
                {showCursor && <span className="cursor"></span>}
            </h1>
        </div>
    );
};

export default AnimatedText;
