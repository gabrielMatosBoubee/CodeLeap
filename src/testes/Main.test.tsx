import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../pages/Main';
import renderWithRouter from './renderWithRouter';
import MockAdapter from "axios-mock-adapter"
import axios from "axios";
import { firstGet, patch, patchResult, postResult, postSend, secondGet, updateGet } from './MainMock';

const axiosMock = new MockAdapter(axios.create({baseURL: "https://dev.codeleap.co.uk/"}))

describe('Testing Main', () => { 
const urlGet = "/careers"
    beforeEach(() => {
      jest.useFakeTimers('modern').setSystemTime(new Date("2023-04-15T03:54:53.795233Z"))
      axiosMock.onGet(urlGet, firstGet)
    })
    
    afterEach(() => {
        axiosMock.restore()
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
    const contentInput = await screen.findByPlaceholderText(/Content here/i)
    userEvent.type(contentInput, 'content')
    expect(createButton).toBeDisabled()
   })
   
   it('test if you call api', async () => {
    renderWithRouter(App)
    expect(urlGet).toBeCalled()
    const titlePost = await screen.findByRole('heading', {level: 2, name: "aasdsa" })
    expect(titlePost).toBeInTheDocument()
    const username = await screen.findByText("garrafa")
    expect(username).toBeInTheDocument()
    const content = await screen.findByText("sf")
    expect(content).toBeInTheDocument()
   }) 

   it('test if receive hour with a year of difference', async () => {
    renderWithRouter(App)
    const timeText = await screen.findByText("1 year ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a mouth of difference', async () => {
    renderWithRouter(App)    
    const timeText = await screen.findByText("1 mouth ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a day of difference', async () => {
    renderWithRouter(App)
    const timeText = await screen.findByText("1 day ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a hour of difference', async () => {
    renderWithRouter(App)
    const timeText = await screen.findByText("1 hour ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a minute of difference', async () => {
    renderWithRouter(App)
    const timeText = await screen.findByText("27 minutes ago")
    expect(timeText).toBeInTheDocument()
   })

   it('test if receive hour with a second of difference', async () => {
    renderWithRouter(App)
    const timeText = await screen.findByText("1 second ago")
    expect(timeText).toBeInTheDocument()
   })

   it("test if you can create your post", async () => {
    renderWithRouter(App)
    const titleInput = await screen.findByPlaceholderText(/Hello world/i)
    userEvent.type(titleInput, 'title')
    const contentInput = await screen.findByPlaceholderText(/Content here/i)
    userEvent.type(contentInput, 'content')
    const createButton = await screen.findByRole('button', {name: /create/i})
    axiosMock.onPost(urlGet, postSend).reply(201, postResult)
    axiosMock.restore()
    axiosMock.onGet(urlGet, secondGet)
    userEvent.click(createButton)
    const titlePost = await screen.findByText('title')
    expect(titlePost).toBeInTheDocument()
   })

   it("test if you can update your post", async () => {
    renderWithRouter(App);
    const updateButton = screen.getByTestId('update-button');
    userEvent.click(updateButton);
    const titleUpdate = screen.getByTestId('update-title');
    userEvent.type(titleUpdate, 'title');
    const contentUpdate = screen.getByTestId('update-content');
    userEvent.type(contentUpdate, 'content');
    axiosMock.onPut("/careers/6652", patch).reply(200, patchResult)
    const saveButton = await screen.findByRole('button', {name: /save/i})
    axiosMock.restore()
    axiosMock.onGet(urlGet, updateGet)
    userEvent.click(saveButton)
    const title = await screen.findByText(/strin/i)
    expect(title).toBeInTheDocument()
   })
})