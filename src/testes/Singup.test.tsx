import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testing Singup', () => {
    it('test if enter button is disabled', () => {
        renderWithRouter(<App />)
        const singUpButton = screen.getByRole('button', {name: /enter/i})
        expect(singUpButton).toBeDisabled()
    });
})