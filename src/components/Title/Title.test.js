// src/components/Title/Title.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

// Descrição da suíte de testes para o componente Title
describe('Title Component', () => {

    // Teste para verificar se o texto do título é renderizado corretamente
    test('renders the title text correctly', () => {
        const text = 'Test Title';

        // Renderiza o componente Title com o texto de exemplo
        render(<Title text={text} />);

        // Procura pelo texto do título no documento
        const titleElement = screen.getByText(text);

        // Verifica se o texto do título está presente no documento
        expect(titleElement).toBeInTheDocument();
    });

    // Teste para verificar se a classe CSS é aplicada corretamente
    test('applies the correct className', () => {
        const text = 'Test Title';
        const className = 'test-class';

        // Renderiza o componente Title com o texto e a classe de exemplo
        render(<Title text={text} className={className} />);

        // Procura pelo texto do título no documento
        const titleElement = screen.getByText(text);

        // Verifica se o título possui a classe correta
        expect(titleElement).toHaveClass(className);
    });

    // Teste para verificar se o componente renderiza sem erros quando a classe CSS não é fornecida
    test('renders without className', () => {
        const text = 'Test Title';

        // Renderiza o componente Title apenas com o texto, sem fornecer a classe
        render(<Title text={text} />);

        // Procura pelo texto do título no documento
        const titleElement = screen.getByText(text);

        // Verifica se o título está presente no documento
        expect(titleElement).toBeInTheDocument();
    });
});
