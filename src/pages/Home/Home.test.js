// src/pages/Home/Home.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

// Descrição da suíte de testes para o componente Home
describe('Home Component', () => {
    
    // Teste para verificar se os títulos são renderizados corretamente
    test('renders the titles correctly', () => {
        // Renderiza o componente Home
        render(<Home />);
        
        // Procura pelo texto do título "PetShop"
        const petShopTitle = screen.getByText(/PetShop/i);
        // Procura pelo texto do título "Get started"
        const getStartedTitle = screen.getByText(/Get started/i);
        
        // Verifica se ambos os títulos estão presentes no documento
        expect(petShopTitle).toBeInTheDocument();
        expect(getStartedTitle).toBeInTheDocument();
    });

    // Teste para verificar se os botões são renderizados com os rótulos corretos
    test('renders the buttons with correct labels', () => {
        // Renderiza o componente Home
        render(<Home />);
        
        // Procura pelo botão com o rótulo "Login"
        const loginButton = screen.getByText(/Login/i);
        // Procura pelo botão com o rótulo "Register"
        const registerButton = screen.getByText(/Register/i);
        
        // Verifica se ambos os botões estão presentes no documento
        expect(loginButton).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();
    });

    // Teste para verificar se os links são renderizados corretamente
    test('renders the links correctly', () => {
        // Renderiza o componente Home
        render(<Home />);
        
        // Procura pelo link "Terms of Use"
        const termsLink = screen.getByText(/Terms of Use/i);
        // Procura pelo link "Privacy Policy"
        const privacyLink = screen.getByText(/Privacy Policy/i);
        
        // Verifica se ambos os links estão presentes no documento
        expect(termsLink).toBeInTheDocument();
        expect(privacyLink).toBeInTheDocument();
    });

    // Teste para verificar se o estado de hover dos botões muda corretamente
    test('changes button hover state on mouse enter and leave', () => {
        // Renderiza o componente Home
        render(<Home />);
        
        // Procura pelo botão com o rótulo "Login"
        const loginButton = screen.getByText(/Login/i);
        // Procura pelo botão com o rótulo "Register"
        const registerButton = screen.getByText(/Register/i);

        // Simula o evento de mouse enter no botão de login
        fireEvent.mouseEnter(loginButton);
        // Verifica se a classe de hover é aplicada ao botão de login
        expect(loginButton).toHaveClass('button-hovered');

        // Simula o evento de mouse leave no botão de login
        fireEvent.mouseLeave(loginButton);
        // Verifica se a classe de hover é removida do botão de login
        expect(loginButton).not.toHaveClass('button-hovered');

        // Simula o evento de mouse enter no botão de registro
        fireEvent.mouseEnter(registerButton);
        // Verifica se a classe de hover é aplicada ao botão de registro
        expect(registerButton).toHaveClass('button-hovered');

        // Simula o evento de mouse leave no botão de registro
        fireEvent.mouseLeave(registerButton);
        // Verifica se a classe de hover é removida do botão de registro
        expect(registerButton).not.toHaveClass('button-hovered');
    });
});
