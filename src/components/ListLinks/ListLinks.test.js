// src/components/ListLinks/ListLinks.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ListLinks from './ListLinks';

// Descrição da suíte de testes para o componente ListLinks
describe('ListLinks Component', () => {

    // Teste para verificar se os links são renderizados corretamente
    test('renders the links correctly', () => {
        const links = [
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' }
        ];

        // Renderiza o componente ListLinks com os links de exemplo
        render(<ListLinks links={links} />);

        // Verifica se o link "Terms of Use" está presente no documento
        const termsLink = screen.getByText(/Terms of Use/i);
        // Verifica se o link "Privacy Policy" está presente no documento
        const privacyLink = screen.getByText(/Privacy Policy/i);

        // Verifica se ambos os links estão presentes no documento
        expect(termsLink).toBeInTheDocument();
        expect(privacyLink).toBeInTheDocument();
    });

    // Teste para verificar se os separadores são renderizados corretamente
    test('renders separators correctly', () => {
        const links = [
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' }
        ];

        // Renderiza o componente ListLinks com os links de exemplo
        render(<ListLinks links={links} />);

        // Verifica se o separador está presente no documento
        const separators = screen.getAllByText('|');
        // Verifica se a quantidade de separadores é igual a quantidade de links - 1
        expect(separators.length).toBe(links.length - 1);
    });

    // Teste para verificar se não há separadores após o último link
    test('does not render separator after the last link', () => {
        const links = [
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' }
        ];

        // Renderiza o componente ListLinks com os links de exemplo
        render(<ListLinks links={links} />);

        // Procura pelo último link
        const lastLink = screen.getByText(/Privacy Policy/i);

        // Verifica se o último link não é seguido por um separador
        const lastLinkParent = lastLink.parentNode;
        expect(lastLinkParent.textContent).toBe('Privacy Policy');
    });
});
