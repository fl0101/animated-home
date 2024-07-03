// src/components/Button/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    /**
     * Teste para verificar se o botão é renderizado com o rótulo correto
     */
    test('renders the button with the correct label', () => {
        // Renderiza o componente Button com o rótulo 'Click Me'
        render(<Button label="Click Me" />);

        // Busca o elemento de botão com o texto 'Click Me'
        const buttonElement = screen.getByText(/click me/i);

        // Verifica se o botão está presente no documento
        expect(buttonElement).toBeInTheDocument();
    });

    /**
     * Teste para verificar se a classe de hover é aplicada quando botão está em estado de hover
     */
    test('applies hover class when hovered', () => {
        // Renderiza o componente Button com o estado de hover ativado
        render(<Button label="Hover Me" isHovered={true} />);

        // Busca o elemento de botão com o texto 'Hover Me'
        const buttonElement = screen.getByText(/hover me/i);

        // Verifica se o botão possui a classe 'button-hovered'
        expect(buttonElement).toHaveClass('button-hovered');
    });

    /**
     * Teste para verificar se o evento onClick é disparado quando o botão é clicado
     */
    test('fires onClick event when clicked', () => {
        // Cria uma função mock para o evento onClick
        const handleClick = jest.fn();

        // Renderiza o componente Button com a função mock handleClick
        render(<Button label="Click Me" onClick={handleClick} />);

        // Busca o elemento do botão com o texto 'Click Me'
        const buttonElement = screen.getByText(/click me/i);

        // Simula um clique no botão
        fireEvent.click(buttonElement);

        // Verifica se a função handleClick foi chamado uma vez
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
