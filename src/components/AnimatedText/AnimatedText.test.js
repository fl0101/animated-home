// src/components/AnimatedText/AnimatedText.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnimatedText from './AnimatedText';

// Descrição da suíte de testes para o componente AnimatedText
describe('AnimatedText Component', () => {

    // Teste para verificar se o componente renderiza o texto animado corretamente
    test('renders the animated text correctly', async () => {
        const text = 'Hello World';

        // Renderiza o componente AnimatedText com o texto de exemplo
        render(<AnimatedText text={text} onComplete={() => {}} />);

        // Aguarda até que o texto animado esteja presente no documento
        await waitFor(() => {
            // Verifica se o texto inicial está presente no documento
            expect(screen.getByText(/^H/i)).toBeInTheDocument();
        });
    });

    // Teste para verificar se a função onComplete é chamada após a animação do texto
    test('calls onComplete after text animation', async () => {
        const text = 'Hello World';
        const onComplete = jest.fn();

        // Renderiza o componente AnimatedText com o texto de exemplo e a função mock onComplete
        render(<AnimatedText text={text} onComplete={onComplete} />);

        // Aguarda até que a função onComplete seja chamada
        await waitFor(() => {
            // Verifica se a função onComplete foi chamada
            expect(onComplete).toHaveBeenCalled();
        }, { timeout: 5000 }); // Define um timeout maior para aguardar a conclusão da animação
    });

    // Teste para verificar se o cursor é exibido durante a animação do texto
    test('shows cursor during text animation', async () => {
        const text = 'Hello World';

        // Renderiza o componente AnimatedText com o texto de exemplo
        render(<AnimatedText text={text} onComplete={() => {}} />);

        // Aguarda até que o cursor esteja presente no documento
        await waitFor(() => {
            // Verifica se o cursor está presente no documento
            expect(screen.getByRole('heading').querySelector('.cursor')).toBeInTheDocument();
        });
    });

    // Teste para verificar se o cursor é ocultado após a animação do texto
    test('hides cursor after text animation', async () => {
        const text = 'Hello World';

        // Renderiza o componente AnimatedText com o texto de exemplo
        render(<AnimatedText text={text} onComplete={() => {}} />);

        // Aguarda até que o cursor seja ocultado
        await waitFor(() => {
            // Verifica se o cursor foi ocultado
            expect(screen.getByRole('heading').querySelector('.cursor')).not.toBeInTheDocument();
        }, { timeout: 5000 }); // Define um timeout maior para aguardar a conclusão da animação
    });
});
