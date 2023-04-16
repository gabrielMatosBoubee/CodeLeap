import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../pages/Singup';
import renderWithRouter from './renderWithRouter';

describe('Testing Singup', () => {
    it('test if enter button is disabled', () => {
        renderWithRouter(<App />)
        const singUpButton = screen.getByRole('button', {name: /enter/i})
        expect(singUpButton).toBeDisabled()
    });
    
    it('test button works right', async () => {
        const { history } = renderWithRouter(<App />)
        const input = await screen.findByPlaceholderText(/john doe/)
        userEvent.type(input, 'Gabriel')
        const singUpButton = screen.getByRole('button', {name: /enter/i})
        userEvent.click(singUpButton)
        expect(history.location.pathname).toBe('/careers')
    })
})