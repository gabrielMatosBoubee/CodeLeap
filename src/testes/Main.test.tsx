import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../pages/Main';
import renderWithRouter from './renderWithRouter';

describe('Testing Main', () => { 
    it('test if you can\t create post without title and content', async () => {
     renderWithRouter(App)
     const createButton = await screen.findAllByRole('button', {name: /create/i})
     expect(createButton).toBeDisabled()
    })

   it('test if you can\t create post without content', async () => {
    renderWithRouter(App)
    const createButton = await screen.findAllByRole('button', {name: /create/i})
    const titleInput = await screen.findByPlaceholderText(/Hello world/i)
    userEvent.type(titleInput, 'title')
    expect(createButton).toBeDisabled()
   })

   it('test if you can\t create post without title', async () => {
    renderWithRouter(App)
    const createButton = await screen.findAllByRole('button', {name: /create/i})
    const contentInput = await screen.findByPlaceholderText(/Hello world/i)
    userEvent.type(contentInput, 'content')
    expect(createButton).toBeDisabled()
   })
   
//    it('test if you call api', () => {
    
//    }) 
})