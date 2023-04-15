import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../pages/Main';
import renderWithRouter from './renderWithRouter';
import MockAdapter from "axios-mock-adapter"
import axios from "axios";
import { firstGet } from './MainMock';

const axiosMock = new MockAdapter(axios)

describe('Testing Main', () => { 

    beforeEach(() => {
      jest.useFakeTimers('modern').setSystemTime(new Date("2023-04-15T03:54:53.795233Z"))
    })

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
   
   it('test if you call api', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)
    expect("https://dev.codeleap.co.uk/careers/").toBeCalled()
    const titlePost = await screen.findByRole('heading', {level: 2, name: "aasdsa" })
    expect(titlePost).toBeInTheDocument()
    const username = await screen.findByText("garrafa")
    expect(username).toBeInTheDocument()
    const content = await screen.findByText("sf")
    expect(content).toBeInTheDocument()
   }) 

   it('test if receive hour with a year of difference', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)
    const timeText = await screen.findByText("1 year ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a mouth of difference', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)    
    const timeText = await screen.findByText("1 mouth ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a day of difference', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)
    const timeText = await screen.findByText("1 day ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a hour of difference', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)
    const timeText = await screen.findByText("1 hour ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a minute of difference', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)
    const timeText = await screen.findByText("27 minutes ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a second of difference', async () => {
    axiosMock.onGet('https://dev.codeleap.co.uk/careers/', firstGet)
    const timeText = await screen.findByText("1 second ago")
    expect(timeText).toBeInTheDocument()
   })
})