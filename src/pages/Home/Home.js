// src/pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import ListLinks from '../../components/ListLinks/ListLinks';
import './Home.css';

/**
 * Componente Home que renderiza a página inicial da aplicação.
 * 
 * O componente Home exibe uma seção azul com um título e um texto animado,
 * e uma seção preta com outro título, dois botões e uma lista de links.
 */

const Home = () => {
    // Estado para rastrear qual botão está sendo hoverizado
    const [hoveredButton, setHoveredButton] = useState(null);
    
    // Lista de textos que serão exibidos de forma animada
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        'Register a wide variety of products',
        'Healthy food, fun toys',
        'Even stylish accessories and state-of-the-art toiletries'
    ];

    // Hook de efeito para resetar o índice do texto quando necessário
    useEffect(() => {
        if (currentTextIndex >= texts.length) {
            setCurrentTextIndex(0);
        }
    }, [currentTextIndex, texts.length]);

    /**
     * Função chamado quando a animação de texto é completada.
     * Atualiza o índice do texto para exibir o próximo texto da lista.
     */
    const handleComplete = () => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    // Lista de links que serão exibidos na seção preta
    const links = [
        { text: 'Terms of Use', href: '#' },
        { text: 'Privacy Policy', href: '#' }
    ];

    return (
        <div className="container">
            <div className="content">
                <div className="blue-section">
                    <Title text="PetShop" className="title-blue-section" />
                    <AnimatedText
                        text={texts[currentTextIndex]}
                        onComplete={handleComplete}
                    />
                </div>
                <div className="black-section">
                    <Title text="Get started" className="title-black-section" />
                    <div className="button-container">
                        <Button
                            label="Login"
                            isHovered={hoveredButton === 'login'}
                            onMouseEnter={() => setHoveredButton('login')}
                            onMouseLeave={() => setHoveredButton(null)}
                        />
                        <Button
                            label="Register"
                            isHovered={hoveredButton === 'register'}
                            onMouseEnter={() => setHoveredButton('register')}
                            onMouseLeave={() => setHoveredButton(null)}
                        />
                    </div>
                    <div>
                        <ListLinks links={links} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
