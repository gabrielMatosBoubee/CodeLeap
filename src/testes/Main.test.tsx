import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../pages/Main';
import renderWithRouter from './renderWithRouter';
import { firstGet, patchResult, postResult, secondGet, updateGet } from './MainMock';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosMock = new MockAdapter(axios)

describe('Testing Main', () => { 
    beforeEach(async () => {
      jest.useFakeTimers('modern').setSystemTime(new Date("2023-04-15T04:54:53.795233Z"))
      axiosMock.onGet().reply(200, firstGet)
    })
    
    afterEach(async () => {
        axiosMock.reset()
    })
    it('test if you call api', async () => {
     renderWithRouter(<App />)
     const titlePost = await screen.findByRole('heading', {level: 2, name: "aasdsa" })
     expect(titlePost).toBeInTheDocument()
     const username = await screen.findAllByText("@garrafa")
     expect(username[0]).toBeInTheDocument()
     const content = await screen.findByText("sf")
     expect(content).toBeInTheDocument()
    }) 

    it('test if you can\'t create post without title and content', async () => {
     renderWithRouter(<App />)
     const createButton = await screen.findByRole('button', {name: /create/i})
     expect(createButton).toBeDisabled()
    })

   it('test if you can\'t create post without content', async () => {
    renderWithRouter(<App />)
    const createButton = await screen.findByRole('button', {name: /create/i})
    const titleInput = await screen.findByPlaceholderText(/Hello world/i)
    userEvent.type(titleInput, 'title')
    expect(createButton).toBeDisabled()
   })

   it('test if you can\'t create post without title', async () => {
    renderWithRouter(<App />)
    const createButton = await screen.findByRole('button', {name: /create/i})
    const contentInput = await screen.findByPlaceholderText(/Content here/i)
    userEvent.type(contentInput, 'content')
    expect(createButton).toBeDisabled()
   })
   

   it('test if receive hour with a year of difference', async () => {
    renderWithRouter(<App />)
    const timeText = await screen.findByText("1 year ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a mouth of difference', async () => {
    renderWithRouter(<App />)    
    const timeText = await screen.findByText(/1 mouth ago/)
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a day of difference', async () => {
    renderWithRouter(<App />)
    const timeText = await screen.findAllByText("1 day ago")
    expect(timeText[0]).toBeInTheDocument()
   })

   it('test if receive hour with a hour of difference', async () => {
    renderWithRouter(<App />)
    const timeText = await screen.findByText("1 hour ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a minute of difference', async () => {
    renderWithRouter(<App />)
    const timeText = await screen.findByText("27 minutes ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a second of difference', async () => {
    renderWithRouter(<App />)
    const timeText = await screen.findByText("1 second ago")
    expect(timeText).toBeInTheDocument()
   })

   it("test if you can create your post", async () => {
    renderWithRouter(<App />)
    const titleInput = await screen.findByPlaceholderText(/Hello world/i)
    userEvent.type(titleInput, 'title')
    const contentInput = await screen.findByPlaceholderText(/Content here/i)
    userEvent.type(contentInput, 'content')
    const createButton = await screen.findByRole('button', {name: /create/i})
    axiosMock.onPost().reply(201, postResult)
    userEvent.click(createButton)
    axiosMock.reset()
    axiosMock.onGet().reply(200, secondGet)
    const titlePost = await screen.findByText('title')
    expect(titlePost).toBeInTheDocument()
   })

   it("test if you can update your post", async () => {
    renderWithRouter(<App />);
    axiosMock.reset();
    axiosMock.onGet().reply(200, secondGet)
    const updateButton = screen.getByTestId('update-button-6652');
    userEvent.click(updateButton);
    const titleUpdate = screen.getByTestId('update-title');
    userEvent.type(titleUpdate, 'title');
    const contentUpdate = screen.getByTestId('update-content');
    userEvent.type(contentUpdate, 'content');
    axiosMock.onPatch().reply(200, patchResult)
    const saveButton = await screen.findByRole('button', {name: /save/i})
    axiosMock.reset()
    axiosMock.onGet().reply(200, updateGet)
    userEvent.click(saveButton)
    const title = await screen.findByText(/strin/i)
    expect(title).toBeInTheDocument()
   })

   it("test if you can delete your post", async () => {
    renderWithRouter(<App />);
    axiosMock.reset();
    axiosMock.onGet().reply(200, secondGet)
    const deleteButton = screen.getByTestId('delete-button-6652');
    userEvent.click(deleteButton);
    axiosMock.onDelete().reply(204)
    const buttonDelete = await screen.findByRole('button', {name: /delete/i})
    axiosMock.restore()
    axiosMock.onGet().reply(200, firstGet)
    userEvent.click(buttonDelete)
    expect(screen.queryByText(/string/i)).not.toBeInTheDocument();
   })
})